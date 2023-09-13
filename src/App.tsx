import ItemComponent from './components/Item'
import React from 'react'
import GlobalStyle from './config/GlobalStyle'
import Navbar from './components/Navbar'
import type { Category } from './types/types'
import { Container, ItemContainer, ItemWrapper, TitleWrapper, AddItemButton } from './App.styled'
import addButtonP from './assets/addButtonP.svg'
import { getCategories, postCategory } from './api/categories'
import { postItem, deleteItem } from './api/items'

function App() {
  // hooks
  const [categories, setCategories] = React.useState<Category[]>([])

  React.useEffect(() => {
    // fetch(`${url}categories/`)
    //  .then((resposta) => resposta.json())
    //  .then((dados) => console.log(dados))
    //  .catch((error) => console.log(error))
    const loadCategories = async () => {
      try {
        const dados = await getCategories()
        console.log(dados)
        setCategories(dados)
      } catch(error){
        console.log(error)
      }
    }
    loadCategories()

  }, [])

  const onCreateCategory = async (category: Category) => {
    try {
      const createdCategory = await postCategory(category)
      const newCategories = categories.map((mapCategory) => ({ 
        ...mapCategory,
        active: false,
      }))
      newCategories.push({...createdCategory, items:[]})
      setCategories(newCategories)
    } catch(error){
      console.log(error)
    }
  }

  

  const onUpdateCategoryValue = (categoryIndex: number,  value: string) => {
    const newCategories = [...categories]
    newCategories[categoryIndex].text = value
    setCategories(newCategories)
  }

  const handleActiveCategory = (id: string) => {
    // 1 - categories - active da categoria
    // categories modificado
    const newCategories = categories.map((category) => ({
      ...category,
      active: id === category.id
    }))

    setCategories(newCategories)
  }

  
  
  const onUpdateItemValue = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const newCategories = categories.map((category) => ({
      ...category,
      items: category.items.map((categoryItem) => ({
        ...categoryItem,
        text: category.active && id === categoryItem.id ? e.target.value : categoryItem.text
      }))
    }))

    setCategories(newCategories)
  }

  const onCheckItem = (id: string) => {
    const newCategories = categories.map((category) => ({
      ...category,
      items: category.items.map((categoryItem) => ({
        ...categoryItem,
        checked: category.active && id === categoryItem.id ? !categoryItem.checked : categoryItem.checked
      }))
    }))

    setCategories(newCategories)
  }

  const onDeleteItem = (id: string) => {
    const newCategories = categories.map((category) => ({
      ...category,
      items: category.active ? category.items.filter((categoryItem) => id !== categoryItem.id) : category.items
    }))

    setCategories(newCategories)
  }

  const activeCategory = categories.find((category) => category.active)

  const onCreateItem = async () => {
    const newItem = {
      text: '',
      checked: false,
      categoryId: activeCategory?.id,
    }
    try {
      const createdItem = await postItem(newItem)
      console.log(createdItem)
      const newCategories = categories.map((category) => ({
        ...category,
        items: category.active ? [
          ...category.items,
          createdItem
        ] : category.items
      }))

      setCategories(newCategories)
    } catch (error) {
      console.log(error)
    }
   
  }

  return (
    <Container>
      <GlobalStyle/>

      <Navbar
        categories={categories}
        onCreateCategory={onCreateCategory}
        onUpdateCategoryValue={onUpdateCategoryValue}
        handleActiveCategory={handleActiveCategory}
      />

      <ItemContainer>
        <TitleWrapper>
          {
            activeCategory ? (
            <>
              <h2>{activeCategory?.text}</h2>
              <AddItemButton 
              type="button"
              onClick={onCreateItem}>
                <img src={addButtonP} />
              </AddItemButton>
            </>
            )
            : (
              <p>Cadastre uma categoria para cadastrar itens</p>
            )
          }
        </TitleWrapper>
        <ItemWrapper>
          {
            activeCategory && activeCategory?.items?.map((item) => (
              <ItemComponent 
                id={item.id}
                key={item.id}
                text={item.text}
                checked={item.checked}
                onCheck={() => onCheckItem(item.id)}
                onDelete={() => onDeleteItem(item.id)}
                onChange={(e) => onUpdateItemValue(e, item.id)}
              />
            ))
          }
        </ItemWrapper>
      </ItemContainer>
    </Container>
  )
}

export default App
