import Link from "next/link";

export default function IndividualHeaders({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl mb-5 font-bold">{title} Auction</h1>
      <Link href={`auction-list/${title.toLowerCase()}`} className="group">
        <span className="flex items-center transition-all duration-300 transform group-hover:translate-x-1">
          <span className="mx-0.5">To</span>
          <span className="mx-0.5">{title}</span>
          <span className="mx-0.5">Auction</span>
          <span className="ml-2">→</span>
        </span>
      </Link>
    </div>
  )
}