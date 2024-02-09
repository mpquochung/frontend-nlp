import FlipCard from '@/components/author_card/flip_card';
import Title from '@/components/BigTitle';

const giang = {
  name: 'Giuong Phuong Giang',
  info: 'Student at NEU',
  position: 'Data Anlyst & Visualization',
  url: 'https://natural-rhubarb-e01.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4aa398d4-2e92-48b7-92f9-4d87362fab14%2F9e9f8e9c-2c93-4c24-8af1-85cac9975483%2FIMG_8802.jpg?table=block&id=ebd8bc46-6d07-4b09-9646-7653f3553fba&spaceId=4aa398d4-2e92-48b7-92f9-4d87362fab14&width=2000&userId=&cache=v2', 
}

const quoc = {
  name: 'Mai Phan Quoc Hung',
  info: 'Student at NEU',
  position: 'Model Assistant & Frontend Developer',
  url: 'https://natural-rhubarb-e01.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4aa398d4-2e92-48b7-92f9-4d87362fab14%2F31a8467e-a6a2-499c-9285-9665c70570f5%2Fanhthe.jpg?table=block&id=8df51c70-aca2-43ca-b61a-857836c692be&spaceId=4aa398d4-2e92-48b7-92f9-4d87362fab14&width=2000&userId=&cache=v2',
}

const quang = {
  name: 'Nguyen Quang Hung',
  info: 'Student at NEU',
  position: 'Modeller & Backend Developer',
  url: 'https://natural-rhubarb-e01.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4aa398d4-2e92-48b7-92f9-4d87362fab14%2Fad2969fa-37ec-447a-8e7c-4584cb6486e6%2F145640156_115364873835541_1573523395682708013_n.jpg?table=block&id=590f3050-e99f-4d99-a6cb-9c83fb664c6c&spaceId=4aa398d4-2e92-48b7-92f9-4d87362fab14&width=1960&userId=&cache=v2',
}

const hanh = {
  name: 'Nguyen Thi Hong Hanh',
  info: 'Student at NEU',
  position: 'Data Engineering',
  url: 'https://natural-rhubarb-e01.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4aa398d4-2e92-48b7-92f9-4d87362fab14%2Fc79acc6b-b3d5-498a-a6c9-4c7f01dbd202%2F95014948_912230032532789_3251733694150344704_n.jpg?table=block&id=59a4c2cf-ed27-42b7-ae44-e875f2571f2f&spaceId=4aa398d4-2e92-48b7-92f9-4d87362fab14&width=1500&userId=&cache=v2',
}

export const metadata = {
  title: 'Contact',
  description: 'This is contact page.',
};

export default function ContactPage() {
  
  return(
    <>
    <Title data={{title: "Authors & Contact", align: "center"}}/>
    <div className="flex flex-col items-stretch sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10">
      <FlipCard data = {quang}/>
      <FlipCard data = {quoc}/>
      <FlipCard data = {giang}/>
      <FlipCard data = {hanh}/>
    </div>
    </>
  );
}
