/*document.addEventListener('DOMContentLoaded', function() {
    // Dados XML incorporados no HTML
    const xmlData = `
    <vinhos>
        <vinho>
            <nome>Vinho Branco Seco 750ml</nome>
            <descricao>Aromas foxado, flores brancas e frutas tropicais maduras.</descricao>
            <preco>19,90</preco>
            <imagem>img/pergola-seco.png</imagem>
        </vinho>
        <vinho>
            <nome>Espumante Moscatel Zanotto</nome>
            <descricao>Elaborado com uvas da variedade Moscato através do método Charmat.</descricao>
            <preco>54,90</preco>
            <imagem>img/espumante.jpg</imagem>
        </vinho>
        <vinho>
            <nome>Brandy Zanotto 50 anos – 500ml</nome>
            <descricao>Brandy 50 anos de envelhecimento. Madeiras: Grápia e Carvalho Francês.</descricao>
            <preco>499,00</preco>
            <imagem>img/Brandy.png</imagem>
        </vinho>
    </vinhos>`;

    // Função para carregar e exibir vinhos a partir do XML
    function loadVinhos() {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
        const vinhos = xmlDoc.getElementsByTagName('vinho');
        const produtosContainer = document.getElementById('produtos');

        Array.from(vinhos).forEach(vinho => {
            const nome = vinho.getElementsByTagName('nome')[0].textContent;
            const descricao = vinho.getElementsByTagName('descricao')[0].textContent;
            const preco = vinho.getElementsByTagName('preco')[0].textContent;
            const imagem = vinho.getElementsByTagName('imagem')[0].textContent;

            const produtoCard = document.createElement('div');
            produtoCard.classList.add('col-md-4');
            produtoCard.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <img src="${imagem}" class="card-img-top" alt="${nome}">
                    <div class="card-body">
                        <h5 class="card-title">${nome}</h5>
                        <p class="card-text">${descricao}</p>
                        <p class="card-text">Preço: R$ ${preco}</p>
                        <button class="btn btn-dark comprar-btn" data-nome="${nome}" data-preco="${preco}">Comprar</button>
                    </div>
                </div>
            `;
            produtosContainer.appendChild(produtoCard);
        });

        // Adiciona evento de clique nos botões "Comprar"
        document.querySelectorAll('.comprar-btn').forEach(button => {
            button.addEventListener('click', function() {
                const nomeProduto = this.getAttribute('data-nome');
                const precoProduto = this.getAttribute('data-preco');
                $('#paymentModal').modal('show');

                // Ao confirmar pagamento
                document.getElementById('confirmarPagamento').addEventListener('click', function() {
                    const nomeCliente = document.getElementById('nomeCliente').value.trim();
                    const numeroCartao = document.getElementById('numeroCartao').value.trim();
                    const metodoPagamento = document.getElementById('metodoPagamento').value;

                    // Validação dos campos obrigatórios
                    if (!nomeCliente || !numeroCartao) {
                        alert('Por favor, preencha todos os campos obrigatórios.');
                        return;
                    }

                    // Verificar se o número do cartão é alfanumérico
                    if (!isAlphanumeric(numeroCartao)) {
                        alert('O número do cartão deve conter apenas caracteres alfanuméricos.');
                        return;
                    }

                    gerarComprovantePDF(nomeProduto, precoProduto, nomeCliente, metodoPagamento);
                });
            });
        });
    }

    // Função para verificar se uma string é alfanumérica
    function isAlphanumeric(str) {
        return /^[a-zA-Z0-9]*$/.test(str);
    }

    // Função para gerar comprovante PDF
    function gerarComprovantePDF(nomeProduto, precoProduto, nomeCliente, metodoPagamento) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Definir o título
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(20);
        doc.text('Comprovante de Compra', 105, 20, null, null, 'center');

        // Adicionar uma linha separadora
        doc.setLineWidth(0.5);
        doc.line(10, 25, 200, 25);

        // Definir o estilo padrão de texto
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12);

        // Adicionar os detalhes da compra
        doc.text(`Produto: ${nomeProduto}`, 10, 40);
        doc.text(`Preço: R$ ${precoProduto}`, 10, 50);

        // Adicionar informações do cliente
        doc.setFont('helvetica', 'bold');
        doc.text('Informações do Cliente:', 10, 70);
        doc.setFont('helvetica', 'normal');
        doc.text(`Nome do Cliente: ${nomeCliente}`, 10, 80);
        doc.text(`Método de Pagamento: ${metodoPagamento}`, 10, 90);

        // Adicionar data e hora
        doc.setFont('helvetica', 'bold');
        doc.text('Data e Hora da Compra:', 10, 110);
        doc.setFont('helvetica', 'normal');
        doc.text(`Data: ${new Date().toLocaleDateString()}`, 10, 120);
        doc.text(`Hora: ${new Date().toLocaleTimeString()}`, 10, 130);

        // Adicionar uma linha de rodapé
        doc.setLineWidth(0.5);
        doc.line(10, 140, 200, 140);

        // Adicionar agradecimento centralizado no final da página
        doc.setFont('helvetica', 'bold');
        doc.text('Obrigado pela sua compra!', 105, 150, null, null, 'center');

        // Abre o PDF em uma nova aba
        window.open(doc.output('bloburl'), '_blank');
    }

    loadVinhos();
});*/

document.addEventListener('DOMContentLoaded', function() {
    const xmlData = `
    <vinhos>
        <vinho>
            <nome>Vinho Branco Seco 750ml</nome>
            <descricao>Aromas foxado, flores brancas e frutas tropicais maduras.</descricao>
            <preco>19,90</preco>
            <imagem>img/pergola-seco.png</imagem>
        </vinho>
        <vinho>
            <nome>Espumante Moscatel Zanotto</nome>
            <descricao>Elaborado com uvas da variedade Moscato através do método Charmat.</descricao>
            <preco>54,90</preco>
            <imagem>img/espumante.jpg</imagem>
        </vinho>
        <vinho>
            <nome>Brandy Zanotto 50 anos – 500ml</nome>
            <descricao>Brandy 50 anos de envelhecimento. Madeiras: Grápia e Carvalho Francês.</descricao>
            <preco>499,00</preco>
            <imagem>img/Brandy.png</imagem>
        </vinho>
    </vinhos>`;

    function loadVinhos() {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
        const vinhos = xmlDoc.getElementsByTagName('vinho');
        const produtosContainer = document.getElementById('produtos');

        Array.from(vinhos).forEach(vinho => {
            const nome = vinho.getElementsByTagName('nome')[0].textContent;
            const descricao = vinho.getElementsByTagName('descricao')[0].textContent;
            const preco = vinho.getElementsByTagName('preco')[0].textContent;
            const imagem = vinho.getElementsByTagName('imagem')[0].textContent;

            const produtoCard = document.createElement('div');
            produtoCard.classList.add('col-md-4');
            produtoCard.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <img src="${imagem}" class="card-img-top" alt="${nome}">
                    <div class="card-body">
                        <h5 class="card-title">${nome}</h5>
                        <p class="card-text">${descricao}</p>
                        <p class="card-text">Preço: R$ ${preco}</p>
                        <button class="btn btn-dark comprar-btn" data-nome="${nome}" data-preco="${preco}">Comprar</button>
                    </div>
                </div>
            `;
            produtosContainer.appendChild(produtoCard);
        });

        document.querySelectorAll('.comprar-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const nomeProduto = this.getAttribute('data-nome');
                const precoProduto = this.getAttribute('data-preco');
                $('#paymentModal').modal('show');
                document.getElementById('confirmarPagamento').onclick = function() {
                    const nomeCliente = document.getElementById('nomeCliente').value.trim();
                    const metodoPagamento = document.getElementById('metodoPagamento').value;
                    const numeroCartao = document.getElementById('numeroCartao').value.trim();

                    if (nomeCliente && metodoPagamento && /^[0-9]+$/.test(numeroCartao)) {
                        const formatoSelecionado = document.querySelector('input[name="formato"]:checked').value;

                        if (formatoSelecionado === 'json') {
                            gerarComprovanteJSON(nomeProduto, precoProduto, nomeCliente, metodoPagamento);
                        } else if (formatoSelecionado === 'xml') {
                            gerarComprovanteXML(nomeProduto, precoProduto, nomeCliente, metodoPagamento);
                        } else if (formatoSelecionado === 'pdf') {
                            gerarComprovantePDF(nomeProduto, precoProduto, nomeCliente, metodoPagamento);
                        } else {
                            alert("Por favor, selecione um formato válido.");
                        }
                        $('#paymentModal').modal('hide');
                    } else {
                        alert("Por favor, preencha todos os campos corretamente.");
                    }
                };
            });
        });
    }

    function gerarComprovanteJSON(nomeProduto, precoProduto, nomeCliente, metodoPagamento) {
        const jsonData = {
            produto: nomeProduto,
            preco: `R$ ${precoProduto}`,
            cliente: {
                nome: nomeCliente,
                metodoPagamento: metodoPagamento
            },
            dataHora: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    }

    function gerarComprovanteXML(nomeProduto, precoProduto, nomeCliente, metodoPagamento) {
        const xmlData = `
        <comprovante>
            <produto>${nomeProduto}</produto>
            <preco>R$ ${precoProduto}</preco>
            <cliente>
                <nome>${nomeCliente}</nome>
                <metodoPagamento>${metodoPagamento}</metodoPagamento>
            </cliente>
            <dataHora>${new Date().toISOString()}</dataHora>
        </comprovante>`;

        const blob = new Blob([xmlData], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    }

   function gerarComprovantePDF(nomeProduto, precoProduto, nomeCliente, metodoPagamento) {
		const { jsPDF } = window.jspdf;
		const doc = new jsPDF();

		// Adicionar título
		doc.setFont('helvetica', 'bold');		
		doc.setFontSize(18);
		doc.text('Comprovante de Compra', 105, 20, null, null, 'center');
		
		// Linha separadora
		doc.setLineWidth(0.5);
		doc.line(10, 25, 200, 25);
		
		// Adicionar detalhes da compra
		doc.setFontSize(12);
		doc.setFont('helvetica', 'normal');
		doc.text(`Produto: ${nomeProduto}`, 10, 40);
		doc.text(`Preço: R$ ${precoProduto}`, 10, 50);
		
		// Informações do cliente
		doc.setFontSize(12);
		doc.setFont('helvetica', 'bold');
		doc.text('Informações do Cliente:', 10, 70);
		doc.setFont('helvetica', 'normal');
		doc.text(`Nome do Cliente: ${nomeCliente}`, 10, 80);
		doc.text(`Método de Pagamento: ${metodoPagamento}`, 10, 90);
		
		// Data e hora
		doc.setFont('helvetica', 'bold');
		doc.text('Data e Hora da Compra:', 10, 110);
		doc.setFont('helvetica', 'normal');
		doc.text(`Data: ${new Date().toLocaleDateString()}`, 10, 120);
		doc.text(`Hora: ${new Date().toLocaleTimeString()}`, 10, 130);
		
		// Linha de rodapé
		doc.setLineWidth(0.5);
		doc.line(10, 140, 200, 140);
		
		// Mensagem de agradecimento
		doc.setFontSize(14);
		doc.setFont('helvetica', 'bold');
		doc.text('Obrigado pela sua compra!', 105, 150, null, null, 'center');

		// Abre o PDF em uma nova aba
		const pdfBlob = doc.output('blob');
		const url = URL.createObjectURL(pdfBlob);
		window.open(url, '_blank');
	}


    loadVinhos();
});


