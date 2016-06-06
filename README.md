TRANSFFER
------------------

#### Description
######Site and system TRANSFFER. (transportadora exutiva) 

#### Using languages
######{HTML - CSS - JS - PHP}

#### Technologies Front
######{BOWER - GRUNT - BOOTSTRAP - JQUERY - ANGULARJS - UI.ROUTE}

==========

#### Frontend install and start server
------------------  

######1. To install Dependencies:
	  $bower install  
	  {Create pasta app/lib/(bower dependencies)}

######2. To install Nodes Dependencies:
	  $npm install  
	  {Create pasta node_modules/(nodes dependencies)}

######3. To build the project a DEV experience:
	  $grunt   
	  {Start front server}

==========

###### Rotas do site, views contendo e função SPA.
	ROTA        | VIEWS       | FUNÇÃO
	----------- | ----------- | -----------
	home{#}     | scopeSlide  | Angular();
	sobre-nos   | scopeSlide  | 
	frota       | scopeSlide  | 	
	fale-conosco| scopeSlide  | 

==========

#### CSS ORGANIZATION {ATOM.D}.
------------------  

###### OPÇÕES DEFAULT
	Classe Nome  |  Definições CSS
	-----------  |  -----------
	h1           |  color: #999;
	h4           |  color: #ccc;
	p            |  margin:0px;color: #ccc;
	body         |  z-index: 0;background-color:#2C2E2F; font-family: 'Roboto', sans-serif;	

###### OPÇÕES DEFAULT CORES
	Classe Nome  |  Definições CSS
	-----------  |  -----------
	cinza-claro  |  background-color:#4D4E4F;
	cinza-escuro |  background-color:#2C2E2F;
	laranja-claro|  background-color:#B78F66;

###### OPÇÕES DEFAULT UTILITÁRIOS:
	Classe Nome  |  Definições CSS
	-----------  |  -----------
	pdg-top5     |  padding-top:   5px;
	pdg-top10    |  padding-top:  10px;
	pdg-top15    |  padding-top:  15px;
	pdg-top20    |  padding-top:  20px;
	pdg-top40    |  padding-top:  40px;
	nopmargin-l  |  margin-left:0px;margin-right:0px;
	nopmargin-h  |  margin-top:0px;margin-bottom: 0px;	
	nopadding-l  |  padding-left:0px;padding-right:0px;
	nopadding-h  |  padding-top:0px;padding-bottom: 0px;

###### OPÇÕES DEFAULT BUTTONS 
	Classe Nome  |  Definições CSS |  Hover Definições
	-----------  |  -----------    |  -----------
	button-large |  padding: 30px 20px; | N/A;
	simple-button|  cursor:pointer;padding: 30px 45px;font-size: 18px;font-weight: bold;border-radius: 0px;transition: color 0.5s; | color: #5F5F5F;

###### OPÇÕES DEFAULT STYLE SLIDE
	Classe Nome  |  Definições CSS
	-----------  |  -----------
	district     |  margin-top: -30px;height: 32px;border-bottom:3px solid #B78F66;
	seta1        |  border-left: 50px solid transparent; border-bottom: 30px solid #2C2E2F;opacity: 0.7;
	seta         |  border-right: 50px solid transparent; border-bottom: 30px solid #2C2E2F;opacity: 0.7;

###### OPÇÕES DEFAULT PAGE BOXES
	Classe Nome  |  Definições CSS
	-----------  |  -----------
	fixermenu    |  height:100px;	
	#mapa        |  height: 250px;border: 1px solid #ccc;	
	pagBox-index |  min-height: 230px;background-image: url(../img/pattern.png);
	pagBox-common|  min-height: 665px;background-image: url(../img/pattern.png);	
	header-menu  |  z-index: 10;height: 100px;position:fixed;border-top: 3px solid #B78F66;background-image: url(../img/pattern.png);

==========

#### Authors
------------------

######Matheus Ferreira - <maathe.f@gmail.com>
