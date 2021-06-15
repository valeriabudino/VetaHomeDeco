
const botonJoinLogin = document.getElementById('join-login')

 botonJoinLogin.addEventListener('click',()=>{
    abrirModalcontent()
    console.log("boton abrir login")
 })


function abrirModalcontent() {
    document.getElementById('titulo').innerHTML = `LOGIN`
    document.getElementById('contenedor-modal-login').innerHTML = ` 
                                        <form>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="inputPassword6" class="col-form-label">Password</label>
                                            <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                                            <span id="passwordHelpInline" class="form-text">
                                            Must be 8-20 characters long.
                                            </span>
                                        </div>
                                        <button type="submit" class="btn btn-success">Submit</button>
                                    </form>
                                                        `
    document.getElementById('modal-footer').innerHTML = `
                                        <p>Aun no tienes una cuenta?</p>
                                        <button type="button" class="btn btn-outline-secondary" onclick="join()">JOIN</button>
    `
    
                                    
    
}

function join() {
    document.getElementById('titulo').innerHTML = `JOIN`
    document.getElementById('contenedor-modal-login').innerHTML =` 
                                <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="inputPassword6" class="col-form-label">Password</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                                    <span id="passwordHelpInline" class="form-text">
                                    Must be 8-20 characters long.
                                    </span>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                    `
    document.getElementById('modal-footer').innerHTML = ``
    
}