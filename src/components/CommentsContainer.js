import React from 'react'


const commentsData = [
    {
        name: "Deepti Verma0",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
        reply: [
            {
                name: "Deepti Verma00",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
                reply: [
                    {
                        name: "Deepti Verma000",
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
                        reply: [
                            {
                                name: "Deepti Verma0000",
                                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
                                reply: [
                                    {
                                        name: "Deepti Verma00000",
                                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
                                        reply: [
                                            {
                                                name: "Deepti Verma000000",
                                                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
                                                reply: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Deepti Verma001",
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
                        reply: []
                    }
                ]
            },
            {
                name: "Deepti Verma01",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
                reply: []
            },
            {
                name: "Deepti Verma02",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
                reply: []
            }
        ]
    },
    {
        name: "Deepti Verma1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
        reply: []
    },
    {
        name: "Deepti Verma2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
        reply: []
    },
    {
        name: "Deepti Verma3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
        reply: []
    },
    {
        name: "Deepti Verma4",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
        reply: []
    },
    {
        name: "Deepti Verma5",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
        reply: []
    },
    {
        name: "Deepti Verma5",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
        reply: []
    },
    {
        name: "Deepti Verma5",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, commodi.",
        reply: []
    }
]

const CommentsContainer = () => {
  return (
    <div className='mt-5 p-4 rounded-xl pb-28'>
        <h1 className='text-2xl font-bold mb-4'>Comments</h1>
        <CommentList comment={commentsData}/>
    </div>
  )
}

export default CommentsContainer


const Comment = ({data}) => {
    const {name, text} = data;

    return (
      <div className='flex bg-gray-100 items-center p-2'>
        <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheI9UkWllIpSNbs2UdE18KLLswgDON9qzXg&usqp=CAU'
            alt='user-img'
            className='w-10 h-10'
            />
        <div className='px-3 '>
            <p className='text-lg font-bold'>{name}</p>
            <p>{text}</p>
        </div>
      </div>
    )
  }


  const CommentList = ({comment})=>{
    console.log(comment)
    return comment.map((data,index)=>(
        <div>
            <Comment key={index} data={data}/>
            <div className='pl-5 border-l-2 border-l-gray-300 mt-2'>
                <CommentList key={`comment`+index} comment={data.reply}/> 
            </div>
        </div>
    ))
  }