
const content={
    text1:{title:"Cautions",
            data:["The model is not perfect and may not be able to predict the correct sentiment for all the reviews."],
            align:"start",
            show:false,
            must_read:true
        },
    text2:{
        title:"Alpha development notice",
        data:["During the development process, the data crawling and labeling techniques lack consistency, resulting in inaccurate outcomes. This inconsistency is primarily observed in the total reactions and timestamps, which have only been recently incorporated."," As we progress, the data will become more precise with real-life information. Additionally, we plan to enhance the querying capabilities, particularly by enabling queries at any given time."],
        align:"start",
        show:false,
        must_read:true
    },

    text_overall:{
        title:"More information",
        data:["<b>Posts by Categories:</b> The chart depicts the number of posts categorized by each category and sentiment, with each sentiment within a topic stacked ontop others.",
            "<b>Responses per posts' catergories:</b> The chart shows the number of comments and replies followed by each topic."],
        align:'start',
        show:false,
    },

    text_posts:{
        title:"What is Top 25% Posts?",
        data:["<b>Top 25% posts</b> is the top 25 percent posts ranked by the number of react on each post."],
        show:false,
    }

    // text3:{
    //     title:""
    // }
}
export default content;