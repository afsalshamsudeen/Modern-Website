import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva('border  rounded-full h-12 px-6 font-medium ',{
    variants:{
        variant:{
            primary:'bg-lime-400 text-neautral-950 border-lime-400',
            secondary:'border-white text-white bg-transparent'
        }
    }
})

export default function Button(props: {variant:"primary" | "secondary"} & HTMLAttributes<HTMLButtonElement>){
    const {variant, className, ...otherProps} = props;
    return <button className={classes({variant, className})} {...otherProps}/>
}