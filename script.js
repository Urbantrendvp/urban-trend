*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#050505;
color:white;
}

header{
text-align:center;
padding:40px;
}

.logo{
width:180px;
border-radius:50%;
}

h1{
margin-top:20px;
font-size:3rem;
}

header p{
color:#00d4ff;
}

.search{
display:flex;
justify-content:center;
margin:20px;
}

.search input{
width:90%;
max-width:500px;
padding:15px;
border:none;
border-radius:10px;
font-size:16px;
}

.catalogo{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
padding:30px;
}

.card{
background:#111;
border-radius:15px;
overflow:hidden;
transition:0.3s;
}

.card:hover{
transform:translateY(-5px);
}

.card img{
width:100%;
height:300px;
object-fit:cover;
}

.info{
padding:15px;
}

.nome{
font-size:20px;
font-weight:bold;
}

.prezzo{
color:#00d4ff;
margin-top:10px;
font-size:18px;
}

footer{
text-align:center;
padding:30px;
}
