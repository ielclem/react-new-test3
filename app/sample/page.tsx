import { CardImage } from "./card"
import { AccordionBasic } from "./accordion"
export default function Page() {
    return <>

        <div className="mt-10 flex flex-col items-center gap-5">
            <CardImage />
            <AccordionBasic />
        </div>

        <h1>
            Wow, this is very hard.
        </h1>

        <p>
            I'm tired of coding aaaaa
        </p>

    </>
}