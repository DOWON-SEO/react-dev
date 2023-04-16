import { Icon } from "../components";

export default function UsingIcon() {
    return(
        <div>
            <h3>Using Icon</h3>
            <Icon name="home" style={{color: 'blue'}}/>
            <Icon name="check_circle_outline" className="text-red" style={{fontSize: '50px'}}/>
        </div>
    )
}