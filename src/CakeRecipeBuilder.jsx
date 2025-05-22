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
            </div>
            
        </div>
    )

}


export default CakeRecipeBuilder;