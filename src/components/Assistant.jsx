import { useState, useRef, useEffect } from 'react'
import { Bot, X, Send, Sparkles } from 'lucide-react'
import { profile, skills, projects, experience } from '../data'

// Local portfolio guide: works offline, with no API key or visitor-data collection.
// To connect a real LLM, use a secure server-side endpoint, never a key in React.
const suggestions = ['Tell me about Fizza', 'What are her skills?', 'Show projects', 'Work experience', 'How can I contact her?']
function answer(question) {
 const q = question.toLowerCase()
 if (/hello|hey|^hi\b|good morning/.test(q)) return 'Hello! I’m Fizza’s portfolio guide. Ask me about her projects, skills, experience, or how to get in touch.'
 if (/contact|email|hire|available|reach/.test(q)) return `You can contact Fizza at ${profile.email}. She is based in ${profile.location}. You can also visit the Contact page.`
 if (/cv|resume|download/.test(q)) return 'You can download Fizza’s CV using the Download CV button in the navigation. The PDF is included in this website.'
 if (/project|portfolio|build|work sample|demo/.test(q)) return `Featured projects include ${projects.slice(0,5).map(x=>x.title).join(', ')}. Visit the Projects page for descriptions and available live demos.`
 if (/skill|technology|tech stack|tools|react|wordpress|webflow|javascript/.test(q)) return `Fizza works with ${skills.flatMap(x=>x.items).slice(0,17).join(', ')}. She has hands-on professional CMS experience and React project experience.`
 if (/experience|job|career|company|employment/.test(q)) return `Her experience includes ${experience.map(x=>`${x.role} at ${x.company}`).join('; ')}. See the Experience page for details.`
 if (/about|who|education|degree|location|fizza/.test(q)) return `Fizza Yousaf is a Software Engineering graduate and frontend developer based in ${profile.location}. She creates responsive web interfaces and works with WordPress, Webflow, JavaScript, and React.`
 return 'I can answer questions about Fizza’s skills, projects, work experience, CV, and contact details. Try one of the suggested questions!'
}
export default function Assistant(){
 const [open,setOpen]=useState(false)
 const [input,setInput]=useState('')
 const [messages,setMessages]=useState([{from:'bot',text:'Hi! I’m Fizza’s portfolio assistant. Ask me about her skills, experience, or projects.'}])
 const end=useRef(null)
 useEffect(()=>{if(open)end.current?.scrollIntoView({behavior:'smooth'})},[messages,open])
 const send=(value=input)=>{const clean=value.trim();if(!clean)return;setMessages(old=>[...old,{from:'user',text:clean},{from:'bot',text:answer(clean)}]);setInput('')}
 return <div className="assistant-wrap">
 {open&&<section className="assistant-panel" aria-label="Portfolio assistant"><div className="assistant-head"><span><Sparkles size={17}/> Portfolio Assistant</span><button aria-label="Close assistant" onClick={()=>setOpen(false)}><X size={18}/></button></div><div className="assistant-messages" aria-live="polite">{messages.map((m,i)=><div className={'assistant-message '+m.from} key={i}>{m.text}</div>)}<div ref={end}/></div><div className="assistant-suggestions">{suggestions.map(s=><button key={s} onClick={()=>send(s)}>{s}</button>)}</div><form className="assistant-form" onSubmit={e=>{e.preventDefault();send()}}><input aria-label="Ask the assistant" value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about Fizza..."/><button type="submit" aria-label="Send message"><Send size={17}/></button></form><div className="assistant-disclaimer">Interactive portfolio guide · No external AI service</div></section>}
 <button className="assistant-fab" onClick={()=>setOpen(x=>!x)} aria-expanded={open} aria-label={open?'Close portfolio assistant':'Open portfolio assistant'}>{open?<X size={22}/>:<Bot size={23}/>}<span>{open?'Close':'Ask Fizza AI'}</span></button>
 </div>
}
