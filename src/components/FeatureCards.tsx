import { twMerge } from "tailwind-merge"

type CardProps = {
    title: string,
    description: string,
    children?: React.ReactNode,
    classname?: string
}

export default function FeatureCards({ title, description, children, classname }: CardProps){
    // const { title, description, children } = props;
    return (
      
            <div className={twMerge("bg-neutral-900 border border-white/10 p-6 rounded-3xl", classname)}>
                    <div className="aspect-video">{children}</div>
                    <div>
                        <h3 className="text-3xl font-medium mt-6">{title}</h3>
                        <p className="text-white/50 mt-2">{description}</p>
                    </div>
                </div>
       
    )
}