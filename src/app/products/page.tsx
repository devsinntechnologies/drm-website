import AccountsFinancePage from "@/components/Products/AccountsFinancePage";
import CRMPage from "@/components/Products/CRMPage";
import HRISPage from "@/components/Products/HRISPage";
import PointOfSalesPage from "@/components/Products/PointOfSalesPage";
import ProductionPage from "@/components/Products/ProductionPage";
import Products from "@/components/Products/Products";
import RecipeManagementPage from "@/components/Products/RecipeManagement";
import SalesOrderDeliveryPage from "@/components/Products/SalesOrderDeliveryPage";
import SupplyChainPage from "@/components/Products/SupplyChainPage";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-red-300 via-orange-200 to-orange-200">
      <Products />
    </main>
  );
}
