import React from 'react';

interface FeatureHighlightProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({ title, description, icon }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center  ">
                <div className='pr-4'> {icon}</div>
                <div className='flex flex-col items-left'>
                    <h3 className="text-lg font-semibold  mb-2">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </div>
        </div>

    );
};

export default FeatureHighlight;



