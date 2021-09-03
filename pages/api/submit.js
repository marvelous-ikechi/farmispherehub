const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const handler = async (req, res) => {

  // connect to database
  const response = await notion.databases.retrieve({database_id:process.env.NOTION_DATABASE_ID})
  if (req.method !== 'POST'){
    return res
      .status(405)
      .json({
        message:`${req.method} requests are not allowed`
      });
  }
  try {
    const { first_name, last_name, farm_name, farm_type, farm_size, products, stateValue, LGAValue } = req.body;
    console.log(req.body)
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        first_name: {
          rich_text: [
            {
              text: {
                content: first_name,
              },
            },
          ],
          
        },
        last_name: {
          rich_text: [
            {
              text: {
                content: last_name,
              },
            },
          ],
        },
        farm_name: {
          rich_text: [
            {
              text: {
                content: farm_name,
              },
            },
          ],
        },
        farm_type: {
          select: {
            name: farm_type,
          },
        },
        farm_size: {
          select: {
            name: farm_size,
          },
        },
        products: {
          rich_text: [
            {
              text: {
                content: products,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) { 
    res.status(500).json({ msg: 'There was an error' });
  }
}

export default handler