import { SkillInfo } from "../User";
import SkillCard from "./SkillCard";

const Skills=()=>{
    return <div className="px-16 md-mx:px-6 my-10 font-mono" id="Skills">
            <h1 className="text-5xl sm-mx:text-4xl xs-mx:text-3xl tracking-tight mb-10 font-extrabold text-center text-white"><span className="text-primaryColor">03.&nbsp;</span>Skills</h1>
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
            {
                SkillInfo.map((skill:any, index:number)=><SkillCard key={index} title={skill.title} skills={skill.skills} />)
            }
            </div>
        </div>
}
export default Skills;
