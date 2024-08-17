import {cart,addtoCart,loadFromStorage} from '../../data/cart.js';


describe('test sute : add to cart',()=>{
  it("add ann existing produuct to thecart",()=>{
    spyOn(localStorage,'setItem');
    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:1,
        deliveyOptionId:'1'
      }]);
    });
loadFromStorage();

addtoCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
expect(cart.length).toEqual(1);
expect(localStorage.setItem).toHaveBeenCalledTimes(1);
expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
expect(cart[0].quantity).toEqual(2);

  });
   
      it('adds a new product to the cart',()=>{
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(()=>{
          return JSON.stringify([]);
        });
          
    loadFromStorage();


      addtoCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(1);

  });
  });