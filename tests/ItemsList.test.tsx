import { render, screen, waitFor,act } from '@testing-library/react';
import { vi,Mock } from 'vitest';
import { ItemsList } from '../src/components/ItemsList';
import { fetchItemsList } from '../src/utils/StockAPIClient';
import { BrowserRouter } from 'react-router-dom';

vi.mock('../src/utils/StockAPIClient', () => ({
    fetchItemsList: vi.fn(),
}));

test('renders ItemsList and displays items', async () => {
    const mockItems = [
        {ID: 1, LABEL: 'Item 1', isLowStock: false},
        {ID: 2, LABEL: 'Item 2', isLowStock: true},
    ];
    (fetchItemsList as Mock).mockResolvedValue(mockItems);

    render(
        <BrowserRouter>
            <ItemsList/>
        </BrowserRouter>
    );

    await waitFor(() => {
        // Check if items are rendered
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();

        // Check if the low stock indicator is visible
        const lowStockIndicator = screen.getByText('Item 2').parentElement?.querySelector('.text-red-500');
        expect(lowStockIndicator).toBeInTheDocument();
    });
})
test('affiche un message approprié lorsqu\'il n\'y a pas d\'articles', async () => {
    (fetchItemsList as Mock).mockResolvedValue([]);

    await act(async () => {
        render(
            <BrowserRouter>
                <ItemsList/>
            </BrowserRouter>
        );
    });

    await waitFor(() => {
        expect(screen.getByText('Aucun article à afficher')).toBeInTheDocument();
    });
});