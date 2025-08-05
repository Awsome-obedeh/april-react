import React from 'react'
import { FaThumbsUp } from "react-icons/fa";

const Jokes = (props) => {
  return (
    <div>
      <div className="border-1  border-white rounded-md p-3">
        <h1>Setup: {props.setup} </h1>
        <p>punchline: {props.punchline}</p>
        <p className="flex items-center"><FaThumbsUp/>: {props.upvote}</p>

        {/* {   condtional rendering using && */}
            {/* // props.author && ( <span>author: {props.author}</span>) */}
        {
            props.author ? (<span>author: {props.author}</span>) : <p>Someone else</p>
        }
       
      </div>
    </div>
  )
}

export default Jokes



const memes= [
{
"id": "181913649",
"name": "Drake Hotline Bling",
"url": "https://i.imgflip.com/30b1gx.jpg",
"width": 1200,
"height": 1200,
"box_count": 2,
"captions": 1437500
},
{
"id": "87743020",
"name": "Two Buttons",
"url": "https://i.imgflip.com/1g8my4.jpg",
"width": 600,
"height": 908,
"box_count": 3,
"captions": 1124000
},
{
"id": "112126428",
"name": "Distracted Boyfriend",
"url": "https://i.imgflip.com/1ur9b0.jpg",
"width": 1200,
"height": 800,
"box_count": 3,
"captions": 1133750
},
{
"id": "222403160",
"name": "Bernie I Am Once Again Asking For Your Support",
"url": "https://i.imgflip.com/3oevdk.jpg",
"width": 750,
"height": 750,
"box_count": 2,
"captions": 320750
},
{
"id": "124822590",
"name": "Left Exit 12 Off Ramp",
"url": "https://i.imgflip.com/22bdq6.jpg",
"width": 804,
"height": 767,
"box_count": 3,
"captions": 703000
},
{
"id": "131087935",
"name": "Running Away Balloon",
"url": "https://i.imgflip.com/261o3j.jpg",
"width": 761,
"height": 1024,
"box_count": 5,
"captions": 581500
},
{
"id": "217743513",
"name": "UNO Draw 25 Cards",
"url": "https://i.imgflip.com/3lmzyx.jpg",
"width": 500,
"height": 494,
"box_count": 2,
"captions": 616500
},
{
"id": "97984",
"name": "Disaster Girl",
"url": "https://i.imgflip.com/23ls.jpg",
"width": 500,
"height": 375,
"box_count": 2,
"captions": 406750
},
{
"id": "80707627",
"name": "Sad Pablo Escobar",
"url": "https://i.imgflip.com/1c1uej.jpg",
"width": 720,
"height": 709,
"box_count": 3,
"captions": 236250
},
{
"id": "135256802",
"name": "Epic Handshake",
"url": "https://i.imgflip.com/28j0te.jpg",
"width": 900,
"height": 645,
"box_count": 3,
"captions": 243750
},
{
"id": "131940431",
"name": "Gru's Plan",
"url": "https://i.imgflip.com/26jxvz.jpg",
"width": 700,
"height": 449,
"box_count": 4,
"captions": 351250
},
{
"id": "252600902",
"name": "Always Has Been",
"url": "https://i.imgflip.com/46e43q.png",
"width": 960,
"height": 540,
"box_count": 2,
"captions": 214000
},
{
"id": "129242436",
"name": "Change My Mind",
"url": "https://i.imgflip.com/24y43o.jpg",
"width": 482,
"height": 361,
"box_count": 2,
"captions": 656750
},
{
"id": "322841258",
"name": "Anakin Padme 4 Panel",
"url": "https://i.imgflip.com/5c7lwq.png",
"width": 768,
"height": 768,
"box_count": 3,
"captions": 130500
},
{
"id": "4087833",
"name": "Waiting Skeleton",
"url": "https://i.imgflip.com/2fm6x.jpg",
"width": 298,
"height": 403,
"box_count": 2,
"captions": 466000
},
{
"id": "438680",
"name": "Batman Slapping Robin",
"url": "https://i.imgflip.com/9ehk.jpg",
"width": 400,
"height": 387,
"box_count": 2,
"captions": 650000
},
{
"id": "161865971",
"name": "Marked Safe From",
"url": "https://i.imgflip.com/2odckz.jpg",
"width": 618,
"height": 499,
"box_count": 2,
"captions": 207500
},
{
"id": "102156234",
"name": "Mocking Spongebob",
"url": "https://i.imgflip.com/1otk96.jpg",
"width": 502,
"height": 353,
"box_count": 2,
"captions": 442000
},
{
"id": "247375501",
"name": "Buff Doge vs. Cheems",
"url": "https://i.imgflip.com/43a45p.png",
"width": 937,
"height": 720,
"box_count": 4,
"captions": 364250
},
{
"id": "93895088",
"name": "Expanding Brain",
"url": "https://i.imgflip.com/1jwhww.jpg",
"width": 857,
"height": 1202,
"box_count": 4,
"captions": 467750
}
];
