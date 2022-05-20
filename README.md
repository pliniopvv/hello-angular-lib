<div><center>
<h2>Como criar uma library com Angular</h2>
<a href="https://www.youtube.com/watch?v=mteJvWBnZXU&t=336s">Ir para o tutorial</a>
</center>
</div>

### Setup
```powershell
# cria um projeto sem aplicativo;
ng new hello-angular-lib --create-application=false
# cria a biblioteca '@pvv/hello-lib'
ng g library @pvv/hello-lib
# criar um componente para a biblioteca:
ng g c button
# buildar o projeto
ng build --prod
# entrar na pasta 'dist'
cd dist/<arquivos.do.projeto>
# logar no npm (é necessário criar uma conta)
npm login
# publicar a biblioteca
#
#   ps: pacotes com '@' no início são pacotes privados # e o NPM cobra!
#

npm publish --access public
```
