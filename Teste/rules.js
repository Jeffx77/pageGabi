const arrayEmails = []
const rules = {
    login: () => {
        $("#containerModalLogin").css("color", "")
        const modal = new bootstrap.Modal('#meuModal');
        const emailLogin = $("#email").val().toLowerCase();
        const senhaLogin = $("#senha").val();

        const dados = localStorage.getItem("usuarioCadastrado");

        if (!dados) {
            $("#containerModalLogin").html("");
            $("#modalTitulo").html("");
            $("#modalTitulo").append("Erro ao Fazer o Login");
            $("#containerModalLogin").append("Gabriele você ja se cadastrou ?")
            modal.show()
            return;
        }

        const usuario = JSON.parse(dados);
        if (emailLogin != "" && senhaLogin != "") {
            if (usuario.email === emailLogin && usuario.senha === senhaLogin) {
                $("#containerModalLogin").html("");
                $("#modalTitulo").html("");
                $("#modalTitulo").append("Login Realizado com Sucesso");

                $("#containerModalLogin").css("color", "green")
                $("#containerModalLogin").append("Bem vindo ao Paraiso")

                modal.show()
                $("#accept").on("click", function () {

                    window.location.href = "index.html"; // se quiser redirecionar
                })
            } else {
                $("#containerModalLogin").html("");
                $("#modalTitulo").html("");
                $("#modalTitulo").append("Erro ao Fazer o Login");
                $("#containerModalLogin").append("Gabriele voce digitou seu email e a senha errada")
                modal.show()
            }
        } else {
            $("#containerModalLogin").html("");
            $("#modalTitulo").html("");
            $("#modalTitulo").append("Campos Obrigatórios Não Preenchidos");
            if (emailLogin == "") {
                $("#containerModalLogin").append("Email Não Preenchido<br> ")
            }
            if (senhaLogin == "") {
                $("#containerModalLogin").append("Senha Não Preenchido<br> ")
            }
            modal.show()
        }
    },
    registrar: () => {
        window.location.href = "Registrar.html"
        console.log("pagina trocada")
    },
    registroSucesso: () => {
        const modal = new bootstrap.Modal('#meuModal');
        var email = $("#email").val()
        var nome = $("#nome").val()
        var senha = $("#senha").val()
        var senhaNovamente = $("#senhaNvm").val()
        if (email != "" && nome != "" && senha != "" && senhaNovamente != "") {
            var emailsValidos = ['gabi.fs400@gmail.com', 'gabi.fs200@gmail.com']
            if (!emailsValidos.includes(email)) {
                $("#containerModal").html("");
                $("#modalTitulo").html("");
                $("#modalTitulo").append("Email Invalido");
                $("#containerModal").append("Você Não é a Gabriele")
                modal.show()

            } else if (nome.toLowerCase().indexOf('gabriele ferreira da silva') != 0) {
                $("#containerModal").html("");
                $("#modalTitulo").html("");
                $("#modalTitulo").append("Nome diferente");
                $("#containerModal").append("Gabriele você esqueceu seu nome")
                modal.show()
            }
            else if (senha != senhaNovamente) {
                $("#containerModal").html("");
                $("#modalTitulo").html("");
                $("#modalTitulo").append("Senhas Diferem");
                $("#containerModal").append("Gabriele você colocou as senhas diferentes")
                modal.show()
            } else {
                const usuario = {
                    email: email.toLowerCase(),
                    senha: senha,
                    nome: nome
                };

                localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));
                $("#containerModal").html("");
                $("#modalTitulo").html("");
                $("#modalTitulo").append("Registrado com Sucesso");
                $("#containerModal").css("color", "green")
                $("#containerModal").append("Parabéns Gabriele, seu registro foi concluido com sucesso")

                modal.show()
                $("#accept").on("click", function () {
                    window.location.href = "login.html";
                    $("#containerModalLogin").css("color", "")
                })

            }

        } else {
            $("#containerModal").html("");
            $("#modalTitulo").html("");
            $("#modalTitulo").append("Campos Obrigatórios não Prenchidos");
            // muda a cor de todo o texto para vermelho

            if (email == "") {
                $("#containerModal").append("Email Não Preenchido<br> ")
            }
            if (nome == "") {
                $("#containerModal").append("Nome Não Preenchido<br> ")
            }
            if (senha == "") {
                $("#containerModal").append("Senha Não Preenchido<br> ")
            } if (senhaNovamente == "") {
                $("#containerModal").append("Confirme sua Senha Não Preenchido<br> ")
            }
            modal.show();
        }
    }
    , telaPrincipal: () => {
        const dados = localStorage.getItem("usuarioCadastrado");
        if (!dados) {
            console.warn("Usuário não encontrado no localStorage.");
            return;
        }
        const usuario = JSON.parse(dados);
        $("#nomeIndex").html("Olá, <b>" + usuario.nome + "</b> seja bem vinda !")
        $("#nomeIndex").append("<br>Também conhecida como amor do Jeff.")
        console.log(usuario.nome)
    }
    , recusoCasamento: () => {
        const modal = new bootstrap.Modal('#meuModal');
        var valor = $("#aceita").val()
        console.log("aqui")
        $("#containerModal").html("");
        $("#modalTitulo").html("");
        switch (valor) {
            case 'nao':
                $("#modalTitulo").append("Não acredito");
                $("#containerModal").append("Banida do meu site, acesso negado, porque não quer casar comigo")
                modal.show()
                $("#accept").on("click", function () {

                    window.close();
                })
                break;
        }
    }
    , localShow: () => {
        if ($("#map").hasClass("hidden")) {
            $("#map").removeAttr("hidden")
            $("#map").removeClass("hidden")
            $(".titleMap").html(" Clique aqui e esqueça onde minha Princesa mora")
        } else {
            $("#map").attr("hidden", "")
            $("#map").addClass("hidden")
            $(".titleMap").html(" Clique aqui e descubra onde minha Princesa mora")
        }
    }
    , senhaEsquecida: () => {
        const dados = localStorage.getItem("usuarioCadastrado");
        const usuario = JSON.parse(dados);
        if (!dados) {
            $("#containerModalLogin").html("");
            $("#modalTitulo").html("");
            $("#modalTitulo").append("Erro ao Fazer o Login");
            $("#containerModal").append("Gabriele você ja se cadastrou ?")
            modal.show()
            return;
        }else{
            $("#emailLB").val(usuario.email)
            $("#nomeLB").val(usuario.nome)
            $("#senhaLB").val(usuario.senha)

        }
    }
}
