"use client"
import FlipCard from '@/components/author_card/flip_card';
import Title from '@/components/BigTitle';
import Paragraph from '@/components/Paragraph';
import {quang,quoc,giang,hanh,title4,text7,text8} from './author';

export default function ContactPage() {
  
  return(
    <>
    <Title data={{title: "Authors & Contact", align: "center"}}/>
    <div className="flex flex-col grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <FlipCard data = {quang}/>
      <FlipCard data = {quoc}/>
      <FlipCard data = {giang}/>
      <FlipCard data = {hanh}/>
    </div>
    <Title data={title4}/>
    <Paragraph data={text7}/>
    <Paragraph data={text8}/>
    </>
  );
}
