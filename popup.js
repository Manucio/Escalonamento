document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const resultContainer = document.getElementById('result-container');

  function search() {
    const searchTerm = searchInput.value.toLowerCase();
    let resultMessage = '';

    
	// DSN - DIVISÃO DE SISTEMAS NACIONAIS (JUR)
    switch (searchTerm) {
      case 'central de mandados':
        resultMessage = 'Encaminhar para DSN-Juridico<br><br> Sistema: <a href="https://pje.trt13.jus.br/centralmandados/" target="_blank">Link</a>';
        break;
      case 'codex':
        resultMessage = 'Encaminhar para DSN-Juridico<br><br> Sistema: <a href="http://www.cnj.jus.br/codex" target="_blank">Link</a>';
        break;
      case 'datajud':
	   resultMessage = 'Encaminhar para DSN-Juridico<br><br> Sistema: <a href="https://justica-em-numeros.cnj.jus.br/painel-estatisticas/" target="_blank">Link</a>';
        break;
      case 'e-gestão jud':
	   resultMessage = 'Encaminhar para DSN-Juridico<br><br>';
        break;
		case 'e-gestão':
	   resultMessage = 'Encaminhar para DSN-Juridico<br><br>';
        break;
		case 'egestao':
	   resultMessage = 'Encaminhar para DSN-Juridico<br><br>';
        break;
		case 'e-gestao':
	   resultMessage = 'Encaminhar para DSN-Juridico<br><br>';
        break;
		case 'egestão':
	   resultMessage = 'Encaminhar para DSN-Juridico<br><br>';
        break;
		case 'egestão jud':
	   resultMessage = 'Encaminhar para DSN-Juridico<br><br>';
        break;
      case 'nugep':
	   resultMessage = 'Encaminhar para DSN-Juridico<br><br> Sistema: <a href="https://trt13.jus.br/institucional/nugep" target="_blank">Link</a>';
        break;
      case 'e-gestão':   
       resultMessage = 'Encaminhar para DSN-Juridico<br><br>';
        break;	  
        
      
      // DSN - DIVISÃO DE SISTEMAS NACIONAIS (ADM)
      case 'sigep':
	   resultMessage = 'Encaminhar para DSN - Administrativo<br><br> Sistema: <a href="https://sso.trt13.jus.br/auth/realms/TRT13/protocol/openid-connect/auth?response_type=code&client_id=sigep-moduloprincipal&redirect_uri=https%3A%2F%2Fsistemas.trt13.jus.br%2Fsigep-online%2F&state=686c337a-466c-402a-986c-a9797e62fa23&login=true&scope=openid" target="_blank">Link</a>';
        break;
		case 'egestao adm':
	   resultMessage = 'Encaminhar para DSN - Administrativo';
        break;
		case 'egestão adm':
	   resultMessage = 'Encaminhar para DSN - Administrativo';
        break;
      case 'e-gestão adm':
	   resultMessage = 'Encaminhar para DSN - Administrativo';
        break;
		case 'e-gestao adm':
	   resultMessage = 'Encaminhar para DSN - Administrativo';
        break;
      case 'proad':
	   resultMessage = 'Encaminhar para DSN - Administrativo<br><br> Sistema: <a href="https://sso.trt13.jus.br/auth/realms/TRT13/protocol/cas/login?service=https%3A%2F%2Fproad.trt13.jus.br%2Fproad%2Fpages%2F" target="_blank">Link</a>';
        break;
      case 'sigs':
	   resultMessage = 'Encaminhar para DSN - Administrativo<br><br> Sistema: <a href="https://sso.trt13.jus.br/auth/realms/TRT13/protocol/openid-connect/auth?client_id=sigep-sigs&redirect_uri=https%3A%2F%2Fsigep.trt13.jus.br%2Fsigs&state=29444fc5-43f1-48cb-8785-5f4e17fb762b&response_mode=fragment&response_type=code&scope=openid&nonce=6079dc12-04ee-4032-8780-0807db7a65da" target="_blank">Link</a>';
        break;
      case 'sigep online':
	   resultMessage = 'Encaminhar para DSN - Administrativo<br><br> Sistema: <a href="https://sso.trt13.jus.br/auth/realms/TRT13/protocol/openid-connect/auth?response_type=code&client_id=sigep-moduloprincipal&redirect_uri=https%3A%2F%2Fwww.trt13.jus.br%2Fsigep-online&state=c2094b9e-21c1-42c2-8d6c-b533f7b622d7&login=true&scope=openid" target="_blank">Link</a>';
        break;
      case 'folha web':
	   resultMessage = 'Encaminhar para DSN - Administrativo<br><br> Sistema: <a href="https://sso.trt13.jus.br/auth/realms/TRT13/protocol/openid-connect/auth?response_type=code&client_id=sigep-folhaweb&redirect_uri=https%3A%2F%2Fsistemas.trt13.jus.br%2Ffolha-sigep%2F&state=33075bf6-aebc-4c38-8b42-7646f366fd6f&login=true&scope=openid" target="_blank">Link</a>';
        break;
      case 'gest':
	   resultMessage = 'Encaminhar para DSN - Administrativo<br><br> Sistema: <a href="https://app.powerbi.com/view?r=eyJrIjoiMTFjYTQ3MzYtNWZjMy00YWE1LWE4YmItZGZlZDRhMGM0NGE2IiwidCI6IjA2OGVjYTE1LWYzNmYtNDY5Mi04NjQyLTMxMjllYmQ2YzdhMCJ9" target="_blank">Link</a>';
        break;
      case 'sisejud':
	   resultMessage = 'Encaminhar para DSN - Administrativo<br><br> Sistema: <a href="https://sisejud.trt13.jus.br/ejud/" target="_blank">Link</a>';
        break;
      case 'Sisejud':
	   resultMessage = 'Encaminhar para DSN - Administrativo<br><br> Sistema: <a href="https://sisejud.trt13.jus.br/ejud/" target="_blank">Link</a>';
        break;        
        
      // SEGEPE e DSN
      case 'e-social':
	    resultMessage = 'Encaminhar para DSN - Administrativo<br><br> Sistema: <a href="https://login.esocial.gov.br/login.aspx" target="_blank">Link</a>';
        break;
      case 'esocial':
        resultMessage = 'Encaminhar para DSN - Administrativo<br><br> Sistema: <a href="https://login.esocial.gov.br/login.aspx" target="_blank">Link</a>';
        break;       
        
      // NSL - NÚCLEO DE SISTEMAS LOCAIS (CDSS)
      case 'gec':
	   resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/gec/view/login.xhtml;jsessionid=pBuTZ5U4Y3AtEFgUFbFDbneNdNm7Iu9z7gwpEOtJ.gec-deploy-75c4b78cf4-nbd28?dswid=-9083" target="_blank">Link</a>';
        break;
      case 'sistema de sustentação oral': 
	   resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://trt13.jus.br/portalservicos/login/login_pje.jsf" target="_blank">Link</a>';
        break;
		 case 'sustentação oral':
	   resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://trt13.jus.br/portalservicos/login/login_pje.jsf" target="_blank">Link</a>';
        break;
		case 'sustentaçao oral':
	   resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://trt13.jus.br/portalservicos/login/login_pje.jsf" target="_blank">Link</a>';
        break;
		case 'sustentacao oral':
	   resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://apps.trt13.jus.br/portalservicos/login/login_pje.jsf" target="_blank">Link</a>';
        break;
      case 'atom':
	   resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="http://atom-hml/index.php" target="_blank">Link</a>';
        break;
      case 'scmp':
	   resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://intranet.trt13.jus.br/SCMP/f/t/inicial" target="_blank">Link</a>';
        break;
      case 'ccalc':
	   resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://apps.trt13.jus.br/ccalc-web/selecionarPerfil.xhtml" target="_blank">Link</a>';
        break;
      case 'contratos':
	   resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://apps.trt13.jus.br/contratos/login/login.jsf" target="_blank">Link</a>';
        break;
      case 'controle de usuários':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://apps.trt13.jus.br/controleusuariosng/#/auth/login" target="_blank">Link</a>';
        break;
		case 'controle de usuarios':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://apps.trt13.jus.br/controleusuariosng/#/auth/login" target="_blank">Link</a>';
        break;
      case 'contas públicas':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://apps.trt13.jus.br/contaspublicasng" target="_blank">Link</a>';
        break;
		 case 'contas publicas':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://apps.trt13.jus.br/contaspublicasng" target="_blank">Link</a>';
        break;
      case 'dashboard':
	  resultMessage = 'Encaminhar para CDSS';
        break;
      case 'power bi':
	  resultMessage = 'Encaminhar para CDSS';
        break;
		 case 'decisometro':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/covid-19-produtividade" target="_blank">Link</a>';
        break;
      case 'decisômetro':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/covid-19-produtividade" target="_blank">Link</a>';
        break;
      case 'dspace - juslaboris':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://normasinternas.trt13.jus.br/xmlui/" target="_blank">Link</a>';
        break;
		 case 'dspace':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://normasinternas.trt13.jus.br/xmlui/" target="_blank">Link</a>';
        break;
		 case 'juslaboris':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://normasinternas.trt13.jus.br/xmlui/" target="_blank">Link</a>';
        break;
      case 'estrutura':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/estrutura/" target="_blank">Link</a>';
        break;
      case 'envia script':
	  resultMessage = 'Encaminhar para CDSS';
        break;
      case 'geraldo':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sso.trt13.jus.br/auth/realms/TRT13/protocol/openid-connect/auth?response_type=code&client_id=geraldo&state=NmM0Lm5uRy00Q2EyNGtIdHB-NWczS1ZJRE5tOEhkS1JZdk5TMXFqUlctNG1y&redirect_uri=https%3A%2F%2Fsistemas.trt13.jus.br%2Fgeraldo%2F&scope=openid&code_challenge=2_hEDAFfG4e354LctE6wpY2kFJOT3IVADflZQcR48vU&code_challenge_method=S256&nonce=NmM0Lm5uRy00Q2EyNGtIdHB-NWczS1ZJRE5tOEhkS1JZdk5TMXFqUlctNG1y" target="_blank">Link</a>';
        break;
		case 'James bond':
	  resultMessage = 'Encaminhar para CDSS';
        break;
      case 'james bond':
	  resultMessage = 'Encaminhar para CDSS';
        break;
		case 'Organograma':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/organograma" target="_blank">Link</a>';
        break;
      case 'organograma':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/organograma" target="_blank">Link</a>';
        break;
	  case 'Ouvidoria':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/institucional/ouvidoria/" target="_blank">Link</a>';
       break;
      case 'ouvidoria':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/institucional/ouvidoria/" target="_blank">Link</a>';
        break;
      case 'otrs':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://atendimento.trt13.jus.br/otrs/index.pl" target="_blank">Link</a>';
        break;
	  case 'Otrs':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://atendimento.trt13.jus.br/otrs/index.pl" target="_blank">Link</a>';
       break;
      case 'ponto eletrônico':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/ponto/registrar.jsp" target="_blank">Link</a>';
        break;
	  case 'ponto eletronico':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/ponto/registrar.jsp" target="_blank">Link</a>';
        break;
      case 'portal de serviços': 
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://trt13.jus.br/portalservicos/abertos/home.jsf" target="_blank">Link</a>';
        break;
		 case 'portal de servicos':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://trt13.jus.br/portalservicos/abertos/home.jsf" target="_blank">Link</a>';
        break;
      case 'portal age':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/age" target="_blank">Link</a>';
        break;
      case 'intranet':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/trt13/intranet" target="_blank">Link</a>';
        break;
      case 'internet':
	  resultMessage = 'Encaminhar para CDSS';
        break;		
      case 'portal segepe':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/gestao-de-pessoas/" target="_blank">Link</a>';
      break;
	  case 'rol':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sigep.trt13.jus.br/autoatendimentoexterno" target="_blank">Link</a>';
	  break;
	  case 'Rol':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sigep.trt13.jus.br/autoatendimentoexterno" target="_blank">Link</a>';
	  break;
	  case 'saoadm':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://apps.trt13.jus.br/saoadm/login?rotaRequisitada=%2F%2F" target="_blank">Link</a>';
        break;	
      case 'sao adm':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://apps.trt13.jus.br/saoadm/login?rotaRequisitada=%2F%2F" target="_blank">Link</a>';
        break;		
      case 'sapi':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema novo: <a href="https://sso.trt13.jus.br/auth/realms/TRT13/protocol/openid-connect/auth?response_type=code&client_id=sapiautoatendimento&state=WE93cnpCeFVjcTRxeHNYTGI3bUVhYjBnRnJpLlpqanVKSDhwZ3J0TVREOHdj&redirect_uri=https%3A%2F%2Fsistemas.trt13.jus.br%2Fsapifrontend%2F&scope=openid&code_challenge=ydwwQAjLMPS8JiFHplXDN8IxSgCPKEcc0IvbybYngMg&code_challenge_method=S256&nonce=WE93cnpCeFVjcTRxeHNYTGI3bUVhYjBnRnJpLlpqanVKSDhwZ3J0TVREOHdj" target="_blank">Link</a><br>Sistema antigo: <a href="https://sistemas.trt13.jus.br/sapi/login.xhtml" target="_blank">Link</a>';
        break;
      case 'sispae':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/sispae/login.xhtml" target="_blank">Link</a>';
        break;
      case 'sisrec':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/sisrec/" target="_blank">Link</a>';
        break;
      case 'sisaval':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sso.trt13.jus.br/auth/realms/TRT13/protocol/openid-connect/auth?response_type=code&client_id=sisavalng&state=MGRmaEVqTmlLLUFKRXJLMXlreEJVc0V1NFJGc0J5Wnl2ZHhncTRyaUwwQU1D&redirect_uri=https%3A%2F%2Fapps.trt13.jus.br%2Fsisavalng&scope=openid&code_challenge=D8z0XwPKwR9ces0J9DvlgQZFPjqf-eqHhLYTkNQd_ww&code_challenge_method=S256&nonce=MGRmaEVqTmlLLUFKRXJLMXlreEJVc0V1NFJGc0J5Wnl2ZHhncTRyaUwwQU1D" target="_blank">Link</a>';
        break;
		case 'jurisprudência':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/jurisprudencia-trt13/ferramentas-de-busca-externa" target="_blank">Link</a>';
        break;
		case 'jurisprudencia':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/jurisprudencia-trt13/ferramentas-de-busca-externa" target="_blank">Link</a>';
        break;
		case 'sistema de jurisprudencia':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/jurisprudencia-trt13/ferramentas-de-busca-externa" target="_blank">Link</a>';
        break;
      case 'sistema de jurisprudência':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/jurisprudencia-trt13/ferramentas-de-busca-externa" target="_blank">Link</a>';
        break;
      case 'sisaudio':
	  	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/sisaudio/login.xhtml" target="_blank">Link</a>';
        break;
      case 'sisaq':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/sisaq/" target="_blank">Link</a>';
        break;
      case 'sisof':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://apps.trt13.jus.br/sisof/login/login.jsf" target="_blank">Link</a>';
        break;
      case 'sisport':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/sisport/" target="_blank">Link</a>';
        break;
      case 'sisemp':
	  resultMessage = 'Encaminhar para CDSS<br>';
        break;
	  case 'aposentadoria':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/simuladoraposentadoria/" target="_blank">Link</a>';
        break;	
      case 'simulador de aposentadoria':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/simuladoraposentadoria/" target="_blank">Link</a>';
        break;
      case 'sistema de inscrição de cursos': 
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sisejud.trt13.jus.br/ejud/" target="_blank">Link</a>';
        break;
		 case 'sistema de inscricão de cursos': 
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sisejud.trt13.jus.br/ejud/" target="_blank">Link</a>';
        break;
      case 'sisvoto':
	  resultMessage = 'Encaminhar para CDSS';
        break;
		case 'Sistema de cadastro de cursos':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/cadastro-cursos/" target="_blank">Link</a>';
        break;
      case 'sistema de cadastro de cursos':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/cadastro-cursos/" target="_blank">Link</a>';
        break;
      case 'sistema de banco de horas':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/ponto/" target="_blank">Link</a>';
        break;
      case 'siabi':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://trt13.jus.br/institucional/gestao-estrategica/governanca/estrutura-normativa/trt-13/setic/catalogo-de-servicos-1/cdms/siabi-2013-sistema-de-biblioteca-2013-atualizacoes-e-incidentes-de-infraestrutura" target="_blank">Link</a>';
        break;
      case 'socorro':
	  resultMessage = 'Encaminhar para CDSS<br><br> Tutorial: <a href="https://docs.google.com/document/d/1Lfm52HHqK2pc2pTw9kIMvqg0bBFL04st1M6Ql9JMiRw/edit" target="_blank">Link</a>';
        break;
      case 'transparência': 
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/transparencia-1/transparencia-e-prestacao-de-contas" target="_blank">Link</a>';
        break;
		case 'transparencia':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/transparencia-1/transparencia-e-prestacao-de-contas" target="_blank">Link</a>';
        break;
      case 'suspensão de prazos':
	  resultMessage = 'Encaminhar para CDSS';
        break;
		case 'suspensao de prazos':
	  resultMessage = 'Encaminhar para CDSS';
        break;
		case 'unificador de pdf':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/unificadorpdf/" target="_blank">Link</a>';
        break;
      case 'unificador de pdfs':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/unificadorpdf/" target="_blank">Link</a>';
        break;
      case 'wiki adm':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/wikiadm/index.php?title=P%C3%A1gina_principal" target="_blank">Link</a>';
        break;
	 case 'wikiadm':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://www.trt13.jus.br/wikiadm/index.php?title=P%C3%A1gina_principal" target="_blank">Link</a>';
        break;
      case 'sistemas de atas de correição':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/gec/" target="_blank">Link</a>';
        break;
      case 'sistemas de banco de talentos':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://sso.trt13.jus.br/auth/realms/TRT13/protocol/openid-connect/auth?response_type=code&client_id=bancotalentos-client&redirect_uri=http%3A%2F%2Fsistemas.trt13.jus.br%2Fbancodetalentos-web%2F&state=5889cb7e-1399-4227-bca7-3c66f521dab6&login=true&scope=openid" target="_blank">Link</a>';         
        break;
		case 'Mentorh':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://rh.trt13.jus.br/csp/trt13/index.csp" target="_blank">Link</a>';         
        break;
		case 'mentorh':
	  resultMessage = 'Encaminhar para CDSS<br><br> Sistema: <a href="https://rh.trt13.jus.br/csp/trt13/index.csp" target="_blank">Link</a>';         
        break;
		
		//Central de Serviços
        case 'certificado digital':
        resultMessage = '*Instalacao(Configuracao)<br>Fila: Central de Atendimento<br><br> *Solicitar (2 via)<br>OBS: Procurar o setor da SEGEPE<br><br>*Incidente<br> 1 Nivel: Central de Servicos<br>2 Nivel: Suporte da Entidade Certificadora <br><br>*Instaladores:<br><br>Administracao de Token<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/safesignic30124-x86-win-tu-admin.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/safesignic30124-x64-win-tu-admin.exe/view" target="_blank">64 bits</a><br><br>*Modelos<br><br>GD<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/gdsetupstarsigncutx32.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/gdsetupstarsigncutx64.exe/view" target="_blank">64 bits</a><br><br>Morpho<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/tokenmorpho32.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/tokenmorpho64.exe/view" target="_blank">64 bits</a><br><br>Token 5110_5100<br><a href="https://drivers.certisign.com.br/midias/tokens/safenet/32bits/certisign10.6-x32-10.6.exe" target="_blank">32 bits</a><br><a href="https://drivers.certisign.com.br/midias/tokens/safenet/64bits/certisign10.6-x64-10.6.exe" target="_blank">64 bits</a><br>';
        break;
		case 'certificado digital install':
        resultMessage = '*Instaladores:<br><br>Administracao de Token<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/safesignic30124-x86-win-tu-admin.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/safesignic30124-x64-win-tu-admin.exe/view" target="_blank">64 bits</a><br><br>*Modelos<br><br>GD<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/gdsetupstarsigncutx32.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/gdsetupstarsigncutx64.exe/view" target="_blank">64 bits</a><br><br>Morpho<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/tokenmorpho32.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/tokenmorpho64.exe/view" target="_blank">64 bits</a><br><br>Token 5110_5100<br><a href="https://drivers.certisign.com.br/midias/tokens/safenet/32bits/certisign10.6-x32-10.6.exe" target="_blank">32 bits</a><br><a href="https://drivers.certisign.com.br/midias/tokens/safenet/64bits/certisign10.6-x64-10.6.exe" target="_blank">64 bits</a><br>';
        break;
	    case 'token':
        resultMessage = '*Instalacao(Configuracao)<br>Fila: Central de Atendimento<br><br> *Solicitar (2 via)<br>OBS: Procurar o setor da SEGEPE<br><br>*Incidente<br> 1 Nivel: Central de Servicos<br>2 Nivel: Suporte da Entidade Certificadora <br><br>*Instaladores:<br><br>Administracao de Token<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/safesignic30124-x86-win-tu-admin.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/safesignic30124-x64-win-tu-admin.exe/view" target="_blank">64 bits</a><br><br>*Modelos<br><br>GD<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/gdsetupstarsigncutx32.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/gdsetupstarsigncutx64.exe/view" target="_blank">64 bits</a><br><br>Morpho<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/tokenmorpho32.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/tokenmorpho64.exe/view" target="_blank">64 bits</a><br><br>Token 5110_5100<br><a href="https://drivers.certisign.com.br/midias/tokens/safenet/32bits/certisign10.6-x32-10.6.exe" target="_blank">32 bits</a><br><a href="https://drivers.certisign.com.br/midias/tokens/safenet/64bits/certisign10.6-x64-10.6.exe" target="_blank">64 bits</a><br>';
        break;
	   case 'token install':
        resultMessage = '*Instaladores:<br><br>Administracao de Token<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/safesignic30124-x86-win-tu-admin.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/safesignic30124-x64-win-tu-admin.exe/view" target="_blank">64 bits</a><br><br>*Modelos<br><br>GD<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/gdsetupstarsigncutx32.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/gdsetupstarsigncutx64.exe/view" target="_blank">64 bits</a><br><br>Morpho<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/tokenmorpho32.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/tokenmorpho64.exe/view" target="_blank">64 bits</a><br><br>Token 5110_5100<br><a href="https://drivers.certisign.com.br/midias/tokens/safenet/32bits/certisign10.6-x32-10.6.exe" target="_blank">32 bits</a><br><a href="https://drivers.certisign.com.br/midias/tokens/safenet/64bits/certisign10.6-x64-10.6.exe" target="_blank">64 bits</a><br>';
        break;
		
      // Pje Terceirizados
      case 'ajjt':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br>Sistema: <a href="https://portal.sigeo.jt.jus.br/portal/0" target="_blank">Link</a>';
	  break;
	  case 'aj-jt':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br>Sistema: <a href="https://portal.sigeo.jt.jus.br/portal/0" target="_blank">Link</a>';
	  break;
	  case 'acervo eletronico':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://acervoeletronico.trt13.jus.br/acervo-eletronico-pje/public/index.php/" target="_blank">Link</a>';
	  break;
      case 'acervo eletrônico':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://acervoeletronico.trt13.jus.br/acervo-eletronico-pje/public/index.php/" target="_blank">Link</a>';
	  break;
      case 'aud':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br>';
	  break;
      case 'ecartas':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://sistemas.trt13.jus.br/eCarta-web/" target="_blank">Link</a>';
	  break;
      case 'gprec':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico';
	  break;
      case 'jte':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://jte.csjt.jus.br/" target="_blank">Link</a>';
	  break;
      case 'garimpo':
      resultMessage = '*Cadastro<br> Fila: Pje 1 Nivel <br><br> *Incidente:<br><br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://sso.trt13.jus.br/auth/realms/TRT13/protocol/openid-connect/auth?response_type=code&client_id=deposito&redirect_uri=http%3A%2F%2Fsistemas.trt13.jus.br%2Fdeposito%2F&state=c446af84-c43f-48cd-9fec-6f7cd2ce495f&login=true&scope=openid" target="_blank">Link</a>';
	  break;
	  case 'pje':
        resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br>Sistema: <a href="https://pje.trt13.jus.br/primeirograu/login.seam" target="_blank">Link</a>';
        break;
	  case 'pje calc':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://pje.trt13.jus.br/pjecalc/logon.jsf" target="_blank">Link</a>';
	  break;
      case 'pje-calc':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://pje.trt13.jus.br/pjecalc/logon.jsf" target="_blank">Link</a>';
	  break;
      case 'pjecalc':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://pje.trt13.jus.br/pjecalc/logon.jsf" target="_blank">Link</a>';
	  break;
	  case 'pje office':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://www.pje.jus.br/wiki/index.php/PJeOffice" target="_blank">Link</a>';
	  break;
      case 'pjeoffice':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://www.pje.jus.br/wiki/index.php/PJeOffice" target="_blank">Link</a>';
	  break;
	  case 'saopje':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://pje.trt13.jus.br/sao/dashboard" target="_blank">Link</a>';
	  break;
      case 'sao pje':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://pje.trt13.jus.br/sao/dashboard" target="_blank">Link</a>';
	  break;
	  case 'Robo RJ9':
	  resultMessage = 'Encaminhar:<br><br>1 Nivel: Pje 1 Nivel <br> 2 Nivel: DSN - Juridico';
	  break;
      case 'rj9':
	  resultMessage = 'Encaminhar:<br><br>1 Nivel: Pje 1 Nivel <br> 2 Nivel: DSN - Juridico';
	  break;	  
	  case 'Rj9':
	  resultMessage = 'Encaminhar:<br><br>1 Nivel: Pje 1 Nivel <br> 2 Nivel: DSN - Juridico';
	  break;	
	  case 'sif':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico';
	  break;
      case 'siscondj':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://siscondj.trt13.jus.br/siscondj/login.jsp;jsessionid=22CEB0B6A68506C0F45D4791D4C09A45" target="_blank">Link</a>';
	  break;
      case 'sisdov':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://sisdov.trt5.jus.br/login" target="_blank">Link</a>';
	  break;
	  case 'shodo':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://pje.trt13.jus.br/shodo/shodo.msi" target="_blank">Link</a>';
	  break;
      case 'shodô':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://pje.trt13.jus.br/shodo/shodo.msi" target="_blank">Link</a>';
	  break;
      case 'solaria':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://sso.trt13.jus.br/auth/realms/TRT13/protocol/openid-connect/auth?client_id=solaria&redirect_uri=https%3A%2F%2Fsolaria.trt13.jus.br%2Fsolaria%2Fcallback&response_type=id_token%20token&scope=openid%20profile%20email%20roles%20offline_access&state=3db610ef0c9a45348d1cd9900b5423d8&nonce=f208ce03e1d6499ea6719dc657261b5b" target="_blank">Link</a>';
	  break;
      case 'sigeo':
	  resultMessage = 'Encaminhar:<br>1 Nivel: Pje Terceirizados <br> 2 Nivel: Pje 1 Nivel <br> 3 Nivel: DSN - Juridico<br><br> Sistema: <a href="https://portal.sigeo.jt.jus.br/portal/0" target="_blank">Link</a>';
	  break;        

      // DAU
       case 'renajud':
	  resultMessage = '*Cadastro<br> Fila: DAU <br><br> *Incidente:<br> Gestor do Sistema: CNJ <br><br> Sistema: <a href="https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?client_id=marketplace-frontend&redirect_uri=https%3A%2F%2Fmarketplace.pdpj.jus.br%2F&state=898226ed-3767-4256-8222-48bf20660c3f&response_mode=fragment&response_type=code&scope=openid&nonce=fdcd5dce-e247-45e0-81eb-4432834ea6cc" target="_blank">Link</a>';
       break;
	   case 'previjud':
       resultMessage = '*Cadastro<br> Fila: DAU <br><br> *Incidente:<br> Gestor do Sistema: CNJ <br><br> Sistema: <a href="https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?client_id=marketplace-frontend&redirect_uri=https%3A%2F%2Fmarketplace.pdpj.jus.br%2F&state=898226ed-3767-4256-8222-48bf20660c3f&response_mode=fragment&response_type=code&scope=openid&nonce=fdcd5dce-e247-45e0-81eb-4432834ea6cc" target="_blank">Link</a>';
       case 'prevjud':
       resultMessage = '*Cadastro<br> Fila: DAU <br><br> *Incidente:<br> Gestor do Sistema: CNJ <br><br> Sistema: <a href="https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?client_id=marketplace-frontend&redirect_uri=https%3A%2F%2Fmarketplace.pdpj.jus.br%2F&state=898226ed-3767-4256-8222-48bf20660c3f&response_mode=fragment&response_type=code&scope=openid&nonce=fdcd5dce-e247-45e0-81eb-4432834ea6cc" target="_blank">Link</a>';
       break;
	   case 'jumper':
       resultMessage = '*Cadastro<br> Fila: DAU <br><br> *Incidente:<br> Gestor do Sistema: CNJ <br><br> Sistema: <a href="https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?client_id=marketplace-frontend&redirect_uri=https%3A%2F%2Fmarketplace.pdpj.jus.br%2F&state=898226ed-3767-4256-8222-48bf20660c3f&response_mode=fragment&response_type=code&scope=openid&nonce=fdcd5dce-e247-45e0-81eb-4432834ea6cc" target="_blank">Link</a>';
       break;
	   case 'serasa':
       resultMessage = '*Cadastro<br><br> Clique <a href="https://docs.google.com/document/d/12zMc4fDZzn7LyyPIssxbSqxqAQjCKxGi/edit#heading=h.gjdgxs" target="_blank">aqui</a> para consultar o(a) gestor(a).<br><br> *Incidente:<br> Fila: DAU <br><br>Sistema: <a href="https://www.serasaexperian.com.br/serasajud/" target="_blank">Link</a>';
       break;
       case 'serasajud':
       resultMessage = '*Cadastro<br><br> Clique <a href="https://docs.google.com/document/d/12zMc4fDZzn7LyyPIssxbSqxqAQjCKxGi/edit#heading=h.gjdgxs" target="_blank">aqui</a> para consultar o(a) gestor(a).<br><br> *Incidente:<br> Fila: DAU <br><br>Sistema: <a href="https://www.serasaexperian.com.br/serasajud/" target="_blank">Link</a>';
       break;
	   case 'serasa experian':
       resultMessage = '*Cadastro<br><br> Clique <a href="https://docs.google.com/document/d/12zMc4fDZzn7LyyPIssxbSqxqAQjCKxGi/edit#heading=h.gjdgxs" target="_blank">aqui</a> para consultar o(a) gestor(a).<br><br> *Incidente:<br> Fila: DAU <br><br>Sistema: <a href="https://www.serasaexperian.com.br/serasajud/" target="_blank">Link</a>';
       break;
	  
      // DAU e Pje Terceirizados
      case 'audiencia digital':
        resultMessage = '*Instalacao(Configuracao)<br>Fila: Central de Atendimento<br><br> *Incidente<br> 1 Nivel: Pje Terceirizados<br>2 Nivel: Pje 1 Nivel <br> 3 Nivel: Gestor do Sistema: CNJ <br><br> Instalador:<br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/adcnjwin32-1-2-0.exe/view" target="_blank">32 bits</a><br><a href="https://www.trt13.jus.br/intranet/ferramentas-de-trabalho/adcnjwin64-1-2-0.exe/view" target="_blank">64 bits</a><br><br>Sistema: <a href="https://midias.pje.jus.br/midias/web/controle-versao" target="_blank">Link</a>';
        break;
	  case 'pje mídias':
        resultMessage = '*Cadastro<br> Advogado = Enviar Script de e-mail <br>Servidor = Fila: DAU <br><br> *Incidente<br> 1 Nivel: Pje Terceirizados<br>2 Nivel: Pje 1 Nivel <br> 3 Nivel: Gestor do Sistema: CNJ <br><br> Sistema: <a href="https://midias.pje.jus.br/midias/web/site/login" target="_blank">Link</a>';
        break;
		case 'pje midias':
        resultMessage = '*Cadastro<br> Advogado = Enviar Script de e-mail <br>Servidor = Fila: DAU <br><br> *Incidente<br> 1 Nivel: Pje Terceirizados<br>2 Nivel: Pje 1 Nivel <br> 3 Nivel: Gestor do Sistema: CNJ <br><br> Sistema: <a href="https://midias.pje.jus.br/midias/web/site/login" target="_blank">Link</a>';
        break;
      case 'sniper':
        resultMessage = '*Cadastro<br> Servidor = Fila: DAU <br>Advogado = Fila: Pje 1 Nivel<br><br> *Incidente<br> 1 Nivel: Pje Terceirizados<br>2  Nivel: Pje 1 Nivel <br> 3 Nivel: Gestor do Sistema: CNJ <br><br> Sistema: <a href="https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?client_id=marketplace-frontend&redirect_uri=https%3A%2F%2Fmarketplace.pdpj.jus.br%2F&state=7be716f4-ea9c-4059-8230-010906c851b2&response_mode=fragment&response_type=code&scope=openid&nonce=67110d42-7d44-4f4b-8568-53de9355f6f6" target="_blank">Link</a>';
        break;
      
      // Infraestrutura
      case 'gabinete virtual':
        resultMessage = '*Liberar (Permitir)<br> Fila: Central de Atendimento<br><br> *Incidente<br> Fila: CITIC<br><br> Sistema: <a href="https://gv.trt13.jus.br/RDWeb/webclient/" target="_blank">Link</a><br><br>Tutorial:<a href="https://docs.google.com/document/d/11Jrbw_83070zFEsIc2Auy0M2Y7qRpqLtoY8s50vHqT0/edit?pli=1#heading=h.bij7qq5uuz6i" target="_blank">Link</a>';
        break;
      case 'vpn':
        resultMessage = '*Instalar<br> Fila: Central de Atendimento<br><br>*Liberar (Permitir)<br> Fila: CITIC<br><br>Instaladores:<br><br>Windows : <a href="https://apps.trt13.jus.br/arquivos/E86.80_CheckPointVPN.msi" target="_blank">Link</a><br>Mac OS : <a href="https://apps.trt13.jus.br/arquivos/Endpoint_Security_VPN.dmg" target="_blank">Link</a><br><br> Tutorial:<br><br>Windows : <a href="https://docs.google.com/document/d/11Jrbw_83070zFEsIc2Auy0M2Y7qRpqLtoY8s50vHqT0/edit?pli=1#heading=h.bij7qq5uuz6i" target="_blank">Link</a><br>Linux : <a href="https://drive.google.com/file/d/1E7PDKdUVS0U77Pc_hCGL4hm2hD3F-q7J/view" target="_blank">Link</a><br>Mac OS : <a href="https://docs.google.com/document/d/1AhKRGfySMR1PQP4TMiMlp4xAv6g9enyEpI3YxBkNzWQ/edit" target="_blank">Link</a>';
        break;
        
      // Voip
      case 'voip':
        resultMessage = '*Instalar <br> Fila: Central de Atendimento<br><br> *Liberar (Permitir)<br> Procedimento: Abrir chamado com a empresa 3CORP<br><br> *Incidente <br> Procedimento: Abrir chamado com a empresa 3CORP<br><br> Sistema: <a href="https://3corp.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2F3corp.zendesk.com%2Fhc%2Fpt-br&theme=hc&locale=pt-br&brand_id=360003835511&auth_origin=360003835511%2Cfalse%2Ctrue" target="_blank">Link</a>';
        break;
		
		//Demais sistemas		
		case 'Sisbajud':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).<br><br>*Incidente<br><br>Fila = Pje 1 Nivel';
		break;
        case 'sisbajud':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).<br><br>*Incidente<br><br>Fila = Pje 1 Nivel';
		break;
		case 'cnib':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'Cnib':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'simba':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'Simba':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'Infojud':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'infojud': 
        resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;		
        case 'bacenjud':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'Bacenjud':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'ccs':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'Ccs':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'Infoseg':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'infoseg':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'CRC':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'Crc':
		resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
		break;
        case 'crc':		
		 resultMessage = '*Cadastro<br><br>Clique <a href="https://docs.google.com/document/d/12-oMm4yaHzcKvgglcq3qxt_SxLKvIpOA/edit" target="_blank">aqui</a> para consultar o(a) gestor(a).';
        break;

      default:
        resultMessage = 'Nenhum resultado encontrado';
    }

    resultContainer.innerHTML = resultMessage;
  }

  searchButton.addEventListener('click', search);
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      search();
    }
  });
});
