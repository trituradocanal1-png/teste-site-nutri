const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form=document.getElementById('leadForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=`Olá, Thayz! Vim pelo site e gostaria de agendar uma consulta.

*FICHA DE INSCRIÇÃO*
Nome: ${d.get('nome')}
Idade: ${d.get('idade')}
WhatsApp: ${d.get('telefone')}
Objetivo: ${d.get('objetivo')}
Modalidade: ${d.get('modalidade')}
Melhor período: ${d.get('periodo')}
Sobre meu objetivo: ${d.get('mensagem')||'Não informado'}`;window.open('https://wa.me/5562992782876?text='+encodeURIComponent(msg),'_blank','noopener')})}