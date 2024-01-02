export default function replaceHtml(template, product) {
    let output = template.replace('{{%PRICE%}}', product.price);
     output = output.replace('{{%IMG%}}', product.productImage);
     output = output.replace('{{%COLOR%}}', product.color);
     output = output.replace('{{%PHONENAME%}}', product.name);
     output = output.replace('{{%MODELNAME%}}', product.modeName);
     output = output.replace('{{%SERIALNUMBER%}}', product.modelNumber);
     output = output.replace('{{%SIZE%}}', product.size);
     output = output.replace('{{%CAMERA%}}', product.camera);
     output = output.replace('{{%DESCRIBTION%}}', product.Description);
     output = output.replace('{{%ID%}}', product.id);
     output = output.replace('{{%ROM%}}', product.ROM);

     return output;
}