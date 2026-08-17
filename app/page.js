"use client";
import {useEffect,useState} from "react";
const slides=[
["SOME PEOPLE","Are simply unforgettable.","And somehow, you became one of those people without even trying."],
["GUNJAN","There is something beautiful about you.","Not just the smile or the way you look, but the person you are when nobody is trying to define you."],
["THE LITTLE THINGS","They make you special.","Your kindness. Your energy. Your way of making ordinary moments feel a little less ordinary."],
["A SMALL REMINDER","You are genuinely amazing.","I hope you never underestimate the warmth, beauty and goodness you bring into the lives of the people around you."],
["AND FINALLY","Thank you, Gunjan. 🤍","For simply being you. I'm genuinely grateful that our paths crossed."]
];
export default function Home(){
 const [started,setStarted]=useState(false),[slide,setSlide]=useState(0),[petals,setPetals]=useState([]);
 useEffect(()=>setPetals(Array.from({length:24},(_,i)=>({id:i,left:Math.random()*100,delay:Math.random()*8,duration:8+Math.random()*8}))),[]);
 if(!started)return <main className="hero"><div className="grain"/><div className="petals">{petals.map(p=><i key={p.id} style={{left:p.left+"%",animationDelay:p.delay+"s",animationDuration:p.duration+"s"}}>✦</i>)}</div><section className="opening"><div className="seal">♡</div><p className="eyebrow">A PAGE MADE WITH WARMTH</p><h1>For <em>Gunjan</em></h1><p className="lead">Some things are better written<br/>than left unsaid.</p><button onClick={()=>setStarted(true)}>Open the letter <span>↗</span></button><div className="small">A little page for someone special · ♫</div></section></main>;
 const s=slides[slide];
 return <main className="hero inside"><div className="grain"/><div className="petals">{petals.map(p=><i key={p.id} style={{left:p.left+"%",animationDelay:p.delay+"s",animationDuration:p.duration+"s"}}>✦</i>)}</div><header><div className="brand">GUNJAN <span>♡</span></div><div className="brand">WITH WARMTH</div></header><section className="letter"><div className="number">{String(slide+1).padStart(2,"0")} — 05</div><div className="copy" key={slide}><p className="eyebrow">{s[0]}</p><h2>{s[1]}</h2><p className="text">{s[2]}</p></div><div className="controls">{slide>0&&<button className="arrow" onClick={()=>setSlide(slide-1)}>←</button>}{slide<4?<button className="next" onClick={()=>setSlide(slide+1)}>Continue <span>→</span></button>:<button className="next" onClick={()=>{setSlide(0);setStarted(false)}}>Read again <span>↺</span></button>}</div><div className="line"><span style={{width:((slide+1)/5)*100+"%"}}/></div></section><footer>made for someone one of a kind</footer></main>;
}