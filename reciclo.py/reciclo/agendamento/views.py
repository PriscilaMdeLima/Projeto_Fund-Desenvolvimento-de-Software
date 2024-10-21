from django.shortcuts import render
import os

# Função para limpar a tela (para diferentes sistemas operacionais)
def limpar_tela():
    os.system('cls' if os.name == 'nt' else 'clear')

print ("Bem vindo ao Reciclo, plataforma que conecta quem deseja descartar material reciclavel a coopetarivas  e catadores!")
print ("Doeções Cadastradas:") ## Inserir aqui todas as doações cadastradas

# Função para exibir o menu
def exibir_menu():
    print("==== RECICLO ====")
    print("1. Cadastrar novo usuário")
    print("2. Cadastrar doação")
    print("3. Agendar coleta")
    print("4. Consultar doações")
    print("5. Sair")


# Função para cadastrar um novo usuário
def cadastrar_usuario():
    nome = input("Digite o nome do usuário: ")
    endereco = input ("Informe Endereço")
    email = input("Digite o e-mail do usuário: ")
    senha = input("Digite a senha do usuário: ")

    with open("usuarios.txt", "a") as arquivo:
        arquivo.write(f"{nome},{endereco}, {email},{senha}\n")
    
    print("\nUsuário cadastrado com sucesso!")

# Função para cadastrar doação

def cadastro_doacao():
    material = input("Informe material que deseja descartar")
    peso = input("Peso estimado material:")
    endereco_coleta = input("Informe endereço da coleta:")

    with open("doacoes.txt", "a") as arquivo:
        arquivo.write(f"{material},{peso}, {endereco_coleta}\n")
    
    print("\nDoação cadastrada com sucesso!")


# Função para listar todos as doações cadastradas
def listar_doacoes():
    if not os.path.exists("doacoes.txt"):
        print("\nNenhuma doação cadastrado.")
        return

    print("\n=== Doações Cadastrados ===")
    with open("doacoes.txt", "r") as arquivo:
        for linha in arquivo:
            material, peso, endereco_coleta = linha.strip().split(',')
            print(f"material: {material}, peso: {peso}, endereco_coleta: {endereco_coleta}")
    print("============================\n")

# Agendar Coleta
def agenda_doacao():


# Função principal
def main():
    while True:
        limpar_tela()
        exibir_menu()
        opcao = input("Escolha uma opção: ")

        if opcao == "1":
            cadastrar_usuario()
        elif opcao == "2":
            cadastro_doacao()
        elif opcao == "3":
            agenda_doacao()
        elif opcao == "4":
            listar_doacoes()
        elif opcao == "5":
            break

        else:
            print("Opção inválida! Tente novamente.")

        input("\nPressione Enter para continuar...")

if __name__ == "__main__":
    main()


# Create your views here.
