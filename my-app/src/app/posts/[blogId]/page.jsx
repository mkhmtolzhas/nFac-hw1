import Card from "../../components/layout/Card";
const data = require('../../../../data/data.json')

export default function page({ params }) {
  const blogId = parseInt(params.blogId); 
  const blogData = data[blogId - 1];

  return (
    <div className='justify-center items-center h-screen flex px-[20%] py-[50px] bg-[#F5F8FA]'>
      <Card key={blogData.id} mentor={blogData.author} date={blogData.date} title={blogData.title} description={blogData.description}/>
    </div>
  )
}



function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
