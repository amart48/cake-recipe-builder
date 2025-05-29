import React, { useState } from 'react';

const CakeRecipeBuilder = () => {

    // State variables for the recipe
    const [recipeName, setRecipeName] = useState('');
    const [bakeTemp, setBakeTemp] = useState('');
    const [bakeTime, setBakeTime] = useState('');
    const [tempUnit, SetTempUnit] = useState('°F');
    const [servingSize, setServingSize] = useState('');
    const [notes, setNotes] = useState('');
  
    // State variables for the ingredients
    const [batterIngredients, setBatterIngredients] = useState([]);
    const [icingIngredients, setIcingIngredients] = useState([]);
  
    // State variables for the ingredient inputs
    const allIngredients = {
      'Flour': { sections: ['batter']},
      'Sugar': { sections: ['both']},
      'Eggs': { sections: ['batter']},
      'Butter': { sections: ['both']},
      'Baking Powder': { sections: ['batter']},
      'Milk': { sections: ['both']},
      'Vanilla Extract': { sections: ['both']},
      'Cocoa Powder': { sections: ['both']},
      'Cream Cheese': { sections: ['both']},
      'Powdered Sugar': { sections: ['both']},
      'Heavy Cream': { sections: ['both']},
      'Cornstarch': { sections: ['both']},
      'Gelatin': { sections: ['icing']},
    }
    
    const units = ['g', 'oz', 'cups', 'NA']

    {/* Custom State Handlers */}
    const getBatterIngredients = () => {
        return Object.entries(allIngredients).filter(([name, info]) =>
            info.sections.includes('batter') || info.sections.includes('both')
        );
    };

    {/* Custom State Handlers */}
    const getIcingIngredients = () => {
        return Object.entries(allIngredients).filter(([name, info]) =>
            info.sections.includes('icing') || info.sections.includes('both')
        );
    };

    {/* Add and Remove Ingredient Functions */}
    const addBatterIngredient = () => {
        setBatterIngredients([...batterIngredients, { ingredient: '', quantity: '', unit: 'g' }]);
    };

    const addIcingIngredient = () => {
        setIcingIngredients([...icingIngredients, { ingredient: '', quantity: '', unit: 'g' }]);
    };

    const removeBatterIngredient = (index) => {
        setBatterIngredients(batterIngredients.filter((_, i) => i !== index));
    };

    const removeIcingIngredient = (index) => {
        setIcingIngredients(icingIngredients.filter((_, i) => i !== index));
    };

    {/* Update Ingredient Functions */}
    const updateBatterIngredient = (index, field, value) => {
        const updatedIngredients = [...batterIngredients]; // Make a copy
        updatedIngredients[index][field] = value; // Update the specific field
        setBatterIngredients(updatedIngredients); // Set the updated state
    };

    const updateIcingIngredient = (index, field, value) => {
        const updatedIngredients = [...icingIngredients];
        updatedIngredients[index][field] = value;
        setIcingIngredients(updatedIngredients);
    };

    {/* Save Recipe Function */}
    const saveRecipe = () => {
        // Validate required fields
        if (!recipeName.trim()) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Validate bake temperature and time
        const recipe = {
            name: recipeName,
            bakeTemp: `${bakeTemp}${tempUnit}`,
            bakeTime: `${bakeTime} minutes`, 
            servingSize,
            notes,
            batterIngredients: batterIngredients.filter(ing => ing.ingredient && ing.quantity), // Filter out empty ingredients
            icingIngredients: icingIngredients.filter(ing => ing.ingredient && ing.quantity),
        };

        console.log('Recipe saved:', recipe);
        alert('Recipe saved successfully!');
    };

    {/* Clear Form Confirmation */}
    const clearForm = () => {
        if (confirm('Are you sure you want to clear the form?')) {
            setRecipeName(''); // Reset values
            setBakeTemp(''); 
            setBakeTime('');
            setServingSize('');
            setNotes('');
            setBatterIngredients([]);
            setIcingIngredients([]);
        }
    };

    {/* Render the ingredient row */}
    const ingredientRow = ({ ingredient, index, availableIngredients, updateFn, removeFn, section}) => (
        <div 
        key ={`${section}-${index}`} // Unique key for each ingredient row
        className='flex flex-col gap-3 sm:gap-2 sm:flex-row items-center bg-white p-3 rounded-lg border border-gray-200 shadow-sm'>
            <select
                value={ingredient.ingredient}
                onChange={(e) => updateFn(index, 'ingredient', e.target.value)}
                className='w-full sm:flex-1 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            >
                <option value="">Select Ingredient...</option>
                {availableIngredients.map(([name]) => ( // Map through available ingredients
                    <option key={name} value={name}>
                        {name}
                </option>
                ))}
            </select>

            <input 
                type="number"
                placeholder='Quantity'
                value={ingredient.quantity}
                onChange={(e) => updateFn(index, 'quantity', e.target.value)} // Update quantity
                className='w-full sm:w-20 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                step='0.01'
                min='0'
            />
            <select
                value={ingredient.unit}
                onChange={(e) => updateFn(index, 'unit', e.target.value)} // Update unit
                className='w-full sm:w-16 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            >
                {units.map((unit) => ( // Map through units
                    <option key={unit} value={unit}>
                        {unit}
                    </option>
                ))}
            </select>

            <button
                onClick={() => removeFn(index)} // Remove ingredient
                className='w-full sm:w-auto p-2 rounded-md border border-gray-300 text-red-500 hover:text-red-50 transition-colors'
            > X
            </button>
        </div>
    );
    
    {/* Main Component Render */}
    return (    
        <div className='min-h-screen bg-orange-50'>
            {/* Header */}
            <div className='bg-white shadow-sm border-b border-gray-200'>
                <div className='max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-bold text-gray-800'>🧁 Cake Recipe Builder</h1>
                    </div>
                </div>
            </div>

            <div className='max-w-4xl mx-auto px-4 py-6 space-y-6'>
                {/* Recipe Name */}
                <div className='bg-white shadow-sm rounded-lg p-6 border-gray-200'>
                    <label className='text-sm font-medium text-gray-700 mb-2'>
                        Recipe Name *
                    </label>
                    <input 
                        type="text" 
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)} // Update recipe name
                        placeholder='Enter recipe name'
                        className='w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                    />
                </div> 
                {/* End Recipe Name */}
            
                
                {/* Recipe Info */}
                <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
                    <h2 className='text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2'>
                        Recipe Settings
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Bake Temperature */}
                        <div>
                            <label className='text-sm font-medium text-gray-700 mb-2 flex items-center gap-1'>
                               🌡️ Bake Temperature
                            </label>
                            <div className='flex gap-1'>
                                <input type="number" 
                                value={bakeTemp}
                                onChange={(e) => setBakeTemp(e.target.value)} // Update bake temperature
                                placeholder='350'
                                className='flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                />
                                <select
                                value={tempUnit}
                                onChange={(e) => SetTempUnit(e.target.value)} // Update temperature unit
                                className='w-16 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                >
                                    <option value="°F">°F</option>
                                    <option value="°C">°C</option>
                                </select>
                            </div>
                        </div>

                        {/* Bake Time */}
                        <div>
                            <label className='text-sm font-medium text-gray-700 mb-2 flex items-center gap-1'>
                               ⏲️ Bake Time (minutes)
                            </label>
                            <input
                                type='number'
                                value={bakeTime}
                                onChange={(e) => setBakeTime(e.target.value)} // Update bake time
                                placeholder='30'
                                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            />
                        </div>
                        
                        {/* Serving Size */}
                        <div>
                            <label className='text-sm font-medium text-gray-700 mb-2 flex items-center gap-1'>
                               🍽️ Serving Size
                            </label>
                            <input
                            type='text'
                            value={servingSize}
                            onChange={(e) => setServingSize(e.target.value)} // Update serving size
                            placeholder='8-10 Servings'
                            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            />
                        </div>

                        {/* Notes */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                              🗒️  Optional Notes
                            </label>
                            <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)} // Update notes
                            placeholder='Add any notes or tips here...'
                            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none'
                            rows={4}
                            />
                        </div>
                    </div>
                </div>
                {/* End Recipe Info */}

                {/* Cake Batter Section */}
                <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200 mt-6'>
                    <div className='flex items-center justify-between mb-6'>
                        <h2 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                            🎂 Cake Batter Ingredients
                        </h2>
                        <button
                            onClick={addBatterIngredient}
                            className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
                        >
                            + Add Ingredient
                        </button>
                    </div>

                    {/* Ingredients List */}
                    <div className='space-y-3'>
                        {batterIngredients.length === 0 && (
                            <p className='text-gray-500 text-center py-8'>No ingredients added yet. Click "Add Ingredient to begin."</p>
                        )}
                        {batterIngredients.map((ingredient, index) => ( // Map through batter ingredients
                            ingredientRow ({
                                ingredient, 
                                index,
                                section: 'batter',
                                availableIngredients: getBatterIngredients(),
                                updateFn: updateBatterIngredient,
                                removeFn: removeBatterIngredient
                            })
                        ))}
                    </div>
                    {/* End Ingredients List */}
                </div>
                {/* End Cake Batter Section */}

                {/* Cake Icing Section */}
                <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
                    <div className='flex items-center justify-between mb-4'>
                        <h2 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                        🍰 Cake Icing Ingredients
                        </h2>
                        <button
                            onClick={addIcingIngredient} // Add icing ingredient
                            className='flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors'
                        >+ Add Ingredient
                        </button>
                    </div>

                    <div className='space-y-3'>
                        {icingIngredients.length === 0 && (
                            <p className='text-gray-500 text-center py-8'>No ingredients added yet. Click "Add Ingredient to begin."</p>
                        )}
                        {icingIngredients.map((ingredient, index) => ( // Map through icing ingredients
                            ingredientRow ({ 
                                ingredient, 
                                index,
                                section: 'icing',
                                availableIngredients: getIcingIngredients(),
                                updateFn: updateIcingIngredient,
                                removeFn: removeIcingIngredient
                            })
                        ))}
                    </div>
                </div>
                {/* End Cake Icing Section */}

                {/* Save and Clear Buttons */}
                <div className='flex justify-between sm:flex-row gap-3'>
                    <button
                        onClick={saveRecipe}
                        className='flex-1 bg-green-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors shadow-sm'
                    >
                        Save Recipe
                    </button>
                    <button
                        onClick={clearForm}
                        className='sm:w-auto bg-gray-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-600 transition-colors shadow-sm'
                    >
                        Clear Form
                    </button>
                </div>
                {/* End Buttons */}
            </div>
        </div>
    );
};

export default CakeRecipeBuilder;

