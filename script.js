*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#0f172a,#020617);
}

.container{
    width:420px;
    padding:25px;
    border-radius:15px;
    background:rgba(0,0,0,0.8);
    color:#00ffcc;
    text-align:center;
    box-shadow:0 0 25px rgba(0,255,255,0.2);
}

h1{
    color:#00ffcc;
    font-size:28px;
    font-weight:bold;
    text-transform:uppercase;
    margin-bottom:20px;
    text-shadow:0 0 12px #00ffcc;
}

input{
    width:100%;
    padding:12px;
    margin-top:15px;
    border:none;
    border-radius:8px;
    outline:none;
    font-size:16px;
}

.btns{
    display:flex;
    justify-content:center;
    gap:15px;
    margin-top:20px;
}

.btns button{
    width:90px;
    height:90px;
    border:none;
    border-radius:15px;
    cursor:pointer;
    background:#19c37d;      /* Light Green */
    color:white;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:8px;

    transition:.3s;
}

.btns button:hover{
    transform:translateY(-4px);
    box-shadow:0 0 18px #19c37d;
}

.icon{
    font-size:28px;
}

.text{
    font-size:14px;
    font-weight:bold;
}

.bar{
    width:100%;
    height:12px;
    background:#222;
    border-radius:10px;
    margin-top:20px;
    overflow:hidden;
}

#fill{
    height:100%;
    width:0%;
    transition:.4s;
}

.weak{
    background:red;
    width:30%;
}

.medium{
    background:orange;
    width:65%;
}

.strong{
    background:lime;
    width:100%;
}

#score,
#risk,
#time,
#suggest{
    margin-top:10px;
}
