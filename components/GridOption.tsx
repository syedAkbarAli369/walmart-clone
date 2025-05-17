import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
    title: string;
    className?: string;
    image?: string;
}

// #0171dc walmart color

const GridOption = ({title, className, image}: Props) => {
  return (
    <Link href={`/search/${encodeURIComponent(title)}`} 
        className={cn("rounded-md p-6 h-full relative col-span-1 hover:opacity-75 border-white border-2 hover:border-[#0171dc]", className)} >
        <h1 className="text-xl font-bold">{title}</h1>
        {
            image && (
                <Image 
                src={image}
                alt={title}
                layout="fill"
                className="object-cover opacity-20 rounded-md"
                />
            )
        }
    </Link>
  )
}

export default GridOption