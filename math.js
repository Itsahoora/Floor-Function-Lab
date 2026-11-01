function evaluateExpression(t){
 const original=t.trim();
 let s=original.toLowerCase().replace(/[۰-۹]/g,ch=>String(ch.charCodeAt(0)-0x06f0)).replace(/[٠-٩]/g,ch=>String(ch.charCodeAt(0)-0x0660)).replace(/٫/g,'.').replace(/٬/g,'').replace(/π/g,'pi').replace(/−/g,'-').replace(/√\s*/g,'sqrt');
 s=s.replace(/sqrt\s*(\d+(?:\.\d+)?)/g,'sqrt($1)');
 if(!s)return null;
 const tokens=s.match(/(?:\d+(?:\.\d*)?|\.\d+|sqrt|pi|[()+\-*/^])/g);
 if(!tokens||tokens.join('')!==s.replace(/\s+/g,''))return NaN;
 let i=0;
 const peek=()=>tokens[i],take=()=>tokens[i++];
 function primary(){
   const z=take();
   if(z===undefined)throw Error('Expected a value');
   if(z==='+')return unary();
   if(z==='-')return -unary();
   if(z==='('){const v=add();if(take()!==')')throw Error('Missing closing parenthesis');return v}
   if(z==='pi')return Math.PI;
   if(z==='sqrt'){if(take()!=='(')throw Error('Use sqrt(number)');const v=add();if(take()!==')'||v<0)throw Error('Invalid square root');return Math.sqrt(v)}
   if(z==='(')return add();
   if(/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(z))return Number(z);
   throw Error('Expected a number');
 }

 function power(){let a=primary();if(peek()==='^'){take();a=a**unary()}return a}
 function unary(){if(peek()==='+'){take();return unary()}if(peek()==='-'){take();return -unary()}return power()}
 function mul(){let a=unary();while(peek()==='*'||peek()==='/'){const op=take(),b=unary();a=op==='*'?a*b:a/b}return a}
 function add(){let a=mul();while(peek()==='+'||peek()==='-'){const op=take(),b=mul();a=op==='+'?a+b:a-b}return a}
 try{const v=add();if(i!==tokens.length||!Number.isFinite(v))return NaN;return {v,s:original}}catch(e){return NaN}
}
window.FloorFunctionMath=Object.freeze({evaluateExpression});
