interface ProductProps {
  params: {
    productId: string
  }
}

export default function ProductPage({ params }: ProductProps) {
  return (
    <main className="p-20 text-black min-h-screen bg-gray-50">
      <div className="home-page title">
        <h1 className="text-3xl mb-5 flex">Auction for
          <div className="font-bold ml-3">
            {params.productId}
          </div>
        </h1>
      </div>
      <div className="text-black">
        {params.productId}
      </div>
    </main>
  )
}