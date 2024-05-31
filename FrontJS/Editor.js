var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],  // Estilos de texto
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],  // Formatação de cabeçalho
    [{ 'font': ['Arial', 'Verdana', 'Georgia', 'Courier'] }],  // Opções de fonte
    [{ 'color': [] }, { 'background': [] }],    // Cores de texto e de fundo
    [{ 'align': [] }],                          // Alinhamento do texto
    ['blockquote', 'code-block'],               // Blocos de citação e de código
    [{'list': 'ordered'}, {'list': 'bullet'}],  // Listas ordenadas e não ordenadas
    [{'indent': '-1'}, {'indent': '+1'}],       // Recuo do texto
    [],                                          // Espaçamento
    ['link', 'image', 'video'],                 // Links, imagens e vídeos
    ['clean']                                   // Limpar formatação
  ];

  var quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });