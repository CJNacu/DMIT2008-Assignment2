import { getProduct } from "@/path/to/module";
    async function getProduct(id){
        const payload = await getProduct()
        const employees = Object.values(payload)
        const singleItem = employees.find(item => item.uid == id)
        return singleItem
    }
    async function ProductPage ({params}) {
        const id= params.id
        const productData = await getProduct(id)
        return (
        <>
        <main className=" min-h-screen py-24">
        {/* single page data UI */}
        </main>
        </>
        );
    }
export default ProductPage