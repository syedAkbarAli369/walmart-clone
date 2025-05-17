


"use client"
import Image from "next/image";
import { GridCategory, gridData } from "@/lib/data";
import { use } from "react";

type Props = {
    params: Promise<{ id: string }>;
};

const Page = ({ params }: Props) => {

    const {id} = use(params);

    const decoded = decodeURIComponent(id) as GridCategory;

    const items = gridData[decoded]

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-3">Results for {decoded}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center">
                {
                    items.map((item, index) => (
                        <div key={index} className="border border-gray-300 p-3 ">
                            <div className="flex items-center justify-center mb-2">
                                <Image src={item.image} alt="test" width={360} height={360} className="h-63"/>
                            </div>
                            <h1 className="text-xl font-bold">{item.name}</h1>
                            <p className="font-bold text-lg">${item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default Page