const fs = require('fs');

function extractAndRemoveStyles(filepath) {
    if (!fs.existsSync(filepath)) return '';
    let content = fs.readFileSync(filepath, 'utf8');
    let styles = '';
    
    // Extract style blocks
    content = content.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, p1) => {
        styles += p1 + '\n';
        return ''; // remove it from the file
    });
    
    // Write back the file without style blocks
    fs.writeFileSync(filepath, content, 'utf8');
    return styles;
}

let allStyles = '';
allStyles += extractAndRemoveStyles('index.html');
allStyles += extractAndRemoveStyles('gallery.html');
allStyles += extractAndRemoveStyles('products.html');
allStyles += extractAndRemoveStyles('about.html');
allStyles += extractAndRemoveStyles('contact.html');
allStyles += extractAndRemoveStyles('why-us.html');

if (allStyles.trim().length > 0) {
    fs.appendFileSync('style.css', '\n/* Extracted Styles */\n' + allStyles, 'utf8');
    console.log('Successfully extracted and appended styles to style.css!');
} else {
    console.log('No styles found to extract.');
}
