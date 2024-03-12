import Pills from "./ResultPills"
import Button from "./Button"
import iconReaction from '../assets/icon-reaction.svg'
import iconMemory from '../assets/icon-memory.svg'
import iconVerbal from '../assets/icon-verbal.svg'
import iconVisual from '../assets/icon-visual.svg'
export default function Summary(){
    const result = [
        {
            title: 'reaction',
            icon: iconReaction,
            value: 80
        },
        {
            title: 'memory',
            icon: iconMemory,
            value: 92
        },
        {
            title: 'verbal ',
            icon: iconVerbal,
            value: 61
        },
        {
            title: 'visual ',
            icon: iconVisual,
            value: 72
        },
    ]
    return(
        <div className="summary">
         <h4>Summary</h4>
         {
            result?.map((item) => 
            <Pills key={item.title} icon={item.icon} title={item.title} value={item.value} pillstyle={item.title}/> )
         }
     
     <Button text='Continue'/>
        </div>
    )
}