import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// For ES Modules: get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const components = [
  "BirthdayCake",
  "CountdownTimer",
  "FloatingHearts",
  "HeroSection",
  "LoveLetter",
  "MusicPlayer",
  "PhotoCarousel",
  "SurpriseSection",
  "Timeline"
];

const dir = path.join(__dirname, 'src', 'components');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

components.forEach(name => {
    const filePath = path.join(dir, `${name}.tsx`);
    const componentName = name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    const content = `import React from "react";

const ${componentName} = () => {
    return (
        <div>
            <h2>${componentName}</h2>
            <p>This is the ${componentName} component.</p>
        </div>
    );
};

export default ${componentName};
`;

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Created ${filePath}`);
});
