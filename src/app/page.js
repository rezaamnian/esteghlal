import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Servercomponenet from "./components/Servercomponenet";
import Clientcomponent from "./components/clientcomponent";

export function generateMetadata(){
  return {

  
    title:"online shope electronics",
    description:"broze emazing prodouct",
    openGraph:{
      title:"online shope electronics-sosial-Media",
    description:"broze emazing prodouct-sosial-Media",
    }
}
}

export default function Home() {



  return (
    <div className={styles.page}>
     <h2>go to play</h2>
     <Link href='/play'>go to play</Link>
    
     <Link href='/rend'>go to rendering</Link>
     <br />
     <Link href='/static'>go to static</Link>
      
     <Link href='/power'>go to power</Link>
     <Link href='/api/hello'>go to api</Link>
     <Link href='/postget'>go to posts</Link>
     <br />
     <Link href={`/nextpage`}>go to next page</Link>
     <Link href='/lazzyloding'>go to lazzy lodding</Link>
     <Link href='/projeh'>go to projeh</Link>
    </div>
  );
}
//npx json-server --watch ./databis/db.json 1   