import Blessing from "./Blessing"
import BlessingWall from "./BlessingWall"
import Countdown from "./Countdown"
import Events from "./Events"
import GroomAndBride from "./GroomAndBride"
import Invitee from "./Invitee"
import Mates from "./Mates"
import WeddingCardPreview from "./WeddingCardPreview"


const Main = ()=>{

    return(
        <>
        <Countdown />
        <Events />
        <WeddingCardPreview />
        <GroomAndBride />
        <Mates />
        <Blessing />
        <BlessingWall />
        {/* <Invitee /> */}
        </>
    )
}

export default Main