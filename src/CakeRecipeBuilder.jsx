import react, { useState } from 'react';

const CakeRecipeBuilder = () => {

    // State variables for the recipe
    const [recipeName, setRecipeName] = useState('');
    const [bakeTemp, setBakeTemp] = useState('');
    const [bakeTime, setBakeTime] = useState('');
    const [tempUnit, SetTempUnit] = useState('°F');
    const [servingSize, setServingSize] = useState();
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
    
    const units = ['g', 'oz', 'cup', 'NA']

    return (    
        <div className='min-h-screen bg-gradient-to-br from-orange-50 to-pink-50'>
            {/* Header */}
            <div className='bg-white shadow-sm border-b border-gray-200'>
                <div className='max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-2xl font-bold text-gray-800'>Cake Recipe Builder</h1>
                    </div>
                </div>
            </div>
            

            <div className='max-w-4xl mx-auto px-4 py-6 space-y-6'>
                {/* Recipe Name */}
                <div className='bg-white shadow-sm rounded-lg p-6 border-gray-200'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Recipe Name *
                    </label>
                    <input 
                    type="text" 
                    value={recipeName}
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
                            <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1'>
                                Bake Temperature
                            </label>
                            <div className='flex gap-1'>
                                <input type="number" 
                                value={bakeTemp}
                                onChange={(e) => setBakeTemp(e.target.value)}
                                placeholder='350'
                                className='flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                />
                                <select
                                value={tempUnit}
                                onChange={(e) => SetTempUnit(e.target.value)}
                                className='w-16 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                >
                                    <option value="°F">°F</option>
                                    <option value="°C">°C</option>
                                </select>
                            </div>
                        </div>

                        {/* Bake Time */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1'>
                                Bake Time (minutes)
                            </label>
                            <input
                                type='number'
                                value={bakeTime}
                                onChange={(e) => setBakeTime(e.target.value)}
                                placeholder='30'
                                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            />
                        </div>
                        
                        {/* Serving Size */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1'>
                                Serving Size
                            </label>
                            <input
                            type='text'
                            value={servingSize}
                            onChange={(e) => setServingSize(e.target.value)}
                            placeholder='8-10 Servings'
                            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            />
                        </div>

                        {/* Notes */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Optional Notes
                            </label>
                            <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder='Add any notes or tips here...'
                            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none'
                            rows={4}
                            />
                        </div>
                    </div>

                    {/* Cake Batter Section */}
                    <div>
                        <div className='flex items-center justify-between mb-6'>
                            <h2 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                                Cake Batter Ingredients
                            </h2>
                            <button
                            className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
                            >
                                Add Ingredient
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default CakeRecipeBuilder;