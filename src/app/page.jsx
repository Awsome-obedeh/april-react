import Applications from "@/components/Applications";
import Card from "@/components/Card";
import Jokes from "@/components/Jokes";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Traveljornal from "@/components/Traveljornal";
import Image from "next/image";

export default function Home({}) {
  return (

    <>
    <Navbar/>

     <Card name="obed" gender="male" phone="0901920332"/> 
     <Card name="daniel" gender="male" phone="0803334558"/> 
     <Card name="promise" gender="male" phone="34443324"/> 
     

    <Products name="samsung" price="250,000" desc="8gb Ram, 128Gb Rom 7.7'' LED display" image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/4554283/1.jpg?3620"/>
    <Products name="Iphone" price="550,000" desc="6gb Ram, 512Gb Rom 7.7'' LED display" image=""/>
    <Products name="Infinix hot 40" price="250,000" desc="6gb Ram, 64Gb Rom 6.7'' LED display"/>

    <Jokes setup="How did he crimainal escapre" punchline="he ransomeware" upvote={4} />
    <Jokes setup="why did'nt the bicycle run" punchline="it was two tired" upvote={5}/>
    <Jokes setup="Where is shiloh" punchline="Praying at shiloh ground" author="obed"/>
    <Jokes setup="order from Mc donald" punchline="the Mc 'donald i know bprays not bakes" upvote={7} author="obed"/>

    {/* create a Product component that contains 5 phone products 
    with  name, price and desc 
    
    Style this card properly and 
    pass the name, price and descriptions using props*/}
 
      <Applications/>

      <Traveljornal/>

    </>

    // challenge 2: create a component called Hero a Navbar
    // design this https://preview--agro-trade-path.lovable.app/#marketplace

    // Question: What is a a component
    // Question 2: Why does the component begin with caps

    // Create a WeatherDisplay component that takes props like
    //  temperature, condition, and location.

    // do this for 4 cities in nigeria

    
  );
}
