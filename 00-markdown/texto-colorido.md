Usando a sintaxe do bloco de código diff para gerar texto colorido:
Utilize 3 (três) crazes seguido da palavra reservada "diff".
O texto em vermelho deve ser precedido por um sinal de menos (-),  
o texto em verde deve ser precedido por um sinal de mais (+),  
o texto em laranja deve ser precedido por exclamação (!),  
o texto em cinza deve ser precedido por uma forquilha (#) e  
o texto em roxo deve ser estar entre dois arrobas (@).  
Fechar o bloco diff com 3 (três) crazes.

Sintaxe: 

\`\`\`diff
\- texto em vermelho
\+ texto em verde
\! texto em laranja
\# texto em cinza
@@ texto em roxo (e negrito) @@ 
\`\`\`  
---  


Por exemplo: 

```diff
- texto em vermelho
+ texto em verde
! texto em laranja
# texto em cinza
@@ texto em roxo (e negrito)@@   
```




