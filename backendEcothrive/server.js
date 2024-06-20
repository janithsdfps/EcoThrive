const express = require('express');
const { run } = require('./index.js'); // Make sure the path is correct

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

app.get('/generate-plant-lists', async (req, res) => {
  const { gardenType, purpose, preference, schedule, town } = req.query;

  try {
    const generatedContent = await run(gardenType, purpose, preference, schedule, town);
    
    // Log the output to the console
    console.log('Generated Content:', generatedContent);
    
    res.json({ message: 'Generated plant lists:', content: generatedContent });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ message: 'Error generating plant lists' });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));








// const express = require('express');
// const { run } = require('./index.js'); // Make sure the path is correct

// const app = express();
// const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// app.get('/generate-plant-lists', async (req, res) => {
//   const { gardenType, purpose, preference, schedule,town } = req.query;

//   try {
//     const generatedContent = await run(gardenType, purpose, preference, schedule,town);
//     res.json({ message: 'Generated plant lists:', content: generatedContent });
//   } catch (error) {
//     console.error('Error generating content:', error);
//     res.status(500).json({ message: 'Error generating plant lists' });
//   }
// });

// app.listen(port, () => console.log(`Server listening on port ${port}`));

