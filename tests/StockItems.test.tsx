import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";

import StockItems from "../src/components/StockItems";
import { fetchStockItems } from "../src/utils/StockAPIClient";

// Mocking de l'API fetchStockItems
vi.mock("../src/utils/StockAPIClient", () => ({
  fetchStockItems: vi.fn(),
}));

const mockFetchStockItems = fetchStockItems as jest.Mock;

// Utilitaire pour rendre le composant avec le contexte
const renderComponent = () => {
  return render(<StockItems ID="1" />);
};

const buildStock = () => {
  return [
    {
      ID: 1,
      LABEL: "Item 1",
      QUANTITY: 10,
      isLowStock: false,
      STOCK_ID: 1,
      DESCRIPTION: "description",
    },
    {
      ID: 2,
      LABEL: "Item 2",
      QUANTITY: 5,
      isLowStock: true,
      STOCK_ID: 1,
      DESCRIPTION: "description",
    },
  ];
};

describe("StockItems", () => {
  beforeEach(() => {
    mockFetchStockItems.mockReset();
  });

  it('affiche "Your stock is empty. Please add items." lorsque le stock est vide', async () => {
    mockFetchStockItems.mockResolvedValueOnce([]);

    renderComponent();

    const newLocal = screen.getByText("Your stock is empty. Please add items.");
    // Vérifier que le message pour stock vide est affiché
    expect(newLocal).toBeInTheDocument();
  });

  it("affiche les éléments du stock lorsque les données sont récupérées", async () => {
    const stockItemsMock = buildStock();

    mockFetchStockItems.mockResolvedValueOnce(stockItemsMock); // Simule la récupération des articles

    render(<StockItems ID="1" />);

    waitFor(() => {
      expect(screen.findByText("Item 1")).toBeVisible();
      expect(screen.findByText("Item 2")).toBeVisible();
    });
  });

  it("appelle fetchStockItems lors du montage", async () => {
    const stockItemsMock = buildStock();

    mockFetchStockItems.mockResolvedValueOnce(stockItemsMock); // Simule la récupération des articles

    renderComponent();

    // Vérifier que `fetchStockItems` a été appelé avec l'ID approprié
    await waitFor(() => expect(fetchStockItems).toHaveBeenCalledWith(1)); // 1 est l'ID du stock
  });

  //
  //     it('met à jour le rendu lorsque les stockItems changent', async () => {
  //         const mockSetStockItems = vi.fn();
  //         const stockItemsMock = [
  //             {ID: 1, LABEL: 'Item 1', QUANTITY: 10, isLowStock: false, STOCK_ID: 1, DESCRIPTION: 'description'},
  //         ];
  //
  //         const {rerender} = renderComponent({stockItems: [], setStockItems: mockSetStockItems});
  //
  //         // Vérifier que "Loading..." est initialement affiché
  //         expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  //
  //         // Mettre à jour les `stockItems` et re-render
  //         rerender(
  //             <StockItemsContext.Provider value={{stockItems: stockItemsMock, setStockItems: mockSetStockItems}}>
  //                 <StockItems ID="1"/>
  //             </StockItemsContext.Provider>
  //         );
  //
  //         // Vérifier que le contenu est mis à jour avec les nouveaux articles
  //         expect(screen.getByText('Item 1')).toBeInTheDocument();
  //     });
});
