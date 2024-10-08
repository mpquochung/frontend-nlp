"use client";
import React from 'react';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/BigTitle';
import { title } from 'process';
export default function AboutPage() {         
  const title0 = {title:'About this Project',
                   align:'center'};
  const feedback = {
                    title: 'Feedback',
                    data:['<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvj_gWNoUYokJn9Xzjl_WYV7jLMnZOya2wXAfQ1FSpq2BgsQ/viewform?embedded=true" width="640" height="2921" frameborder="2" marginheight="0" marginwidth="0">Loading…</iframe>'],
                    show:false,
                    must_read:true,
                  };

  const text1 = {title: "From research to real-life application",
                  data : ["This website is the implementation of our research conducted at <b>Toward multitask learning approach: NEU dataset for Educational Sentiment analysis and topic Classification (NEU-ESC)</b>. Utilizing a multi-task model, we offer the capability to provide multiple predictions simultaneously. Our model specializes in identifying current trends and analyzing user behavior specifically within education forums. You can experiment with our prediction feature here or explore our dashboard to delve deeper into forum analysis here."],
                  align: "start"};

  const title1 = {title: 'What We Bring',
                  align: "center"}
              
  const text2 = {title: "Multi-task BERT Model",
                  data : ["At the heart of our platform lies our state-of-the-art <strong>Multi-task BERT</strong> (Bidirectional Encoder Representations from Transformers) model. BERT, developed by Google, has revolutionized the field of NLP with its ability to understand the context of words in a sentence. Our customized version of BERT is specially trained to perform both text sentiment analysis and classification tasks for educational forums, with exceptional accuracy and efficiency."],
                  align :"start"};

  const text3 = { title: "User-Friendly Interface",
                data: ["We understand the importance of simplicity and accessibility. Our platform features an intuitive user interface that allows users to easily input text, receive predictions for sentiment and classification, and provide valuable feedback. Whether you're a seasoned data scientist or a casual user, our platform is designed to be user-friendly and efficient."],
                align: "start"};

  const text4 = {title: "Dashboard for Analysis",
                  data: ["In addition to providing real-time predictions and feedback capabilities, we also offer a comprehensive dashboard for analyzing the content of some of the most common forums and other text-based educational platforms, such as GOC THONG TIN NEU, Tra da Bach Khoa, Tra da VNU, Dai hoc dung hoc dai, etc. Our dashboard aggregates and visualizes sentiment analysis and classification results, enabling users to gain valuable insights into the tone and topics of discussion. "],
                  align: "start"};

  const title2 = {title: 'The Difference: Regular Forums vs Educational Forums',
                  align: "center"}

  const text5 = {title: "It is not just a normal forum!",
                  data: ["Regular forums serve as platforms for general discussions, often revolving around various topics of interest, entertainment, or community engagement. On the other hand, educational forums are specifically tailored to facilitate learning, personal life sharing among students, educators, and enthusiasts. Educational forums typically focus on academic subjects, professional development, or skill enhancement, providing a structured environment for asking questions, exchanging ideas, sharing students’ lifes and accessing educational resources. "],
                  
                  };
          
  const title3 = {title: 'Existing Solution vs Our Approaches',
                  align: "center"}

  const text6 = {title :"More precise and x2 efficiency!",
                  data: ["There have been numerous approaches for this problem, from datasets specialized for education forums, e,g, (VSFC) to models. However, those datasets are too naive, as they don’t contain any slang among ‘Gen-Z’ students, or have little relevance to education, and the models are unnecessarily sophisticated."," By only using one BERT-base model, we are able to perform both tasks in one single run, faster than any existing BERTology that is close to our performance. And with an up-to-date dataset, we can better extract information on education on social media platform, namely Facebook."],
                  align: "start"};
  
  const title4 ={
    title:"Give us what you think",
    align: "center"
  }

  return (
<>
    <Title data={title0}/>
    <Paragraph data={text1}/>
    <Title data={title1}/>
    <Paragraph data={text2}/>
    <Paragraph data={text3}/>
    <Paragraph data={text4}/>
    <Title data={title2}/>
    <Paragraph data={text5}/>
    <Title data={title3}/>
    <Paragraph data={text6}/>
    <Title data={title4}/>
    <Paragraph data={feedback}/>
</>             
  );
}
