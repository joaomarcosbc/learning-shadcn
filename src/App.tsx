import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import  { Search, PlusCircle } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogFooter, DialogHeader } from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";

export function App() {
  return (
      <div className="p-6 max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Produtos</h1>
        <div className="border rounded-lg p-2">
          <div className="flex items-cemter justify-between">
            <form className="flex items-center gap-2">
              <Input name="id" placeholder="ID do pedido" className="w-auto"/>
              <Input name="name" placeholder="Nome do produto" className="w-auto"/>
              <Button type="submit" variant="link">
                <Search className="w-4 h-4 mr-2"/>
                Filtrar Resultados
              </Button>
            </form>

            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="w-4 h-4 mr-2"/>
                  Novo Produto
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Novo Produto</DialogTitle>
                  <DialogDescription>Criar um novo produto no sistema</DialogDescription>
                </DialogHeader>
                <form className="space-y-6">
                  <div className="grid-cols-4 items-center text-left gap-3">
                    <Label htmlFor="name">Produtos</Label>
                    <Input className="col-span-3" id="name"></Input>
                  </div>
                  <div className="grid-cols-4 items-center text-left gap-3">
                    <Label htmlFor="price">Preço</Label>
                    <Input className="col-span-3" id="price"></Input>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="outline">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit">Salvar</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

          </div>
          <Table>
            <TableHeader>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableHeader>
            <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>Bsdjkh4567sh</TableCell>
                      <TableCell>Produto {(i + 1)}</TableCell>
                      <TableCell>R$400.00</TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </div>
      </div>
    )
}
