const express = require('express');
const { run } = require('./index.js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

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





// Endpoint to fetch plant details
app.get('/spoutplant', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('plants')
      .select('id, plant_name, details');

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
