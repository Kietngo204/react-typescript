import React, { ChangeEvent, useEffect, useState } from "react";
import { addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { colRef } from "../lib/firebase";
import { useAppDispatch, useAppSelector } from "../core/hooks";
import { setMobile } from "../core/redux/actions/actions-create";

export interface MobileType {
  id: string;
  name: string;
  screen: string;
  ram: string;
  rom: string;
  price: number;
}

function Products() {
  const dispatch = useAppDispatch();
  const mobiles = useAppSelector((state) => state.mobile);
  const [priceMobile, setPriceMobile] = useState<number | string>("");

  const handleCreateMobile = async (callback: () => void) => {
    try {
      await addDoc(colRef, {
        name: "Oppo Reno11 Pro 5G",
        screen: "AMOLED 6.7 Full HD+",
        ram: "8GB",
        rom: "256GB",
        price: 450,
      });
      callback(); // Gọi hàm callback khi thêm sản phẩm thành công
    } catch (error) {
      console.error("Error adding: ", error);
    }
  };

  const handleUpdateMobile = async (
    callback: () => void,
    id: string,
    price: number | string
  ) => {
    try {
      if (price) {
        await updateDoc(doc(colRef, id), { price });
        callback();
        setPriceMobile("");
      }
    } catch (error) {
      console.error("Error updating: ", error);
    }
  };

  const handleDeleteMobile = async (callback: () => void, id: string) => {
    try {
      await deleteDoc(doc(colRef, id));
      callback();
    } catch (error) {
      console.error("Error deleting: ", error);
    }
  };

  const fetchData = () => {
    getDocs(colRef)
      .then((response) => {
        let newMobiles: MobileType[] = [];
        response.docs.forEach((doc) => {
          newMobiles.push({ ...doc.data(), id: doc.id } as MobileType);
        });
        dispatch(setMobile(newMobiles));
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(mobiles);
  return (
    <div>
      <button onClick={() => handleCreateMobile(fetchData)}>Add mobile</button>
      <div>
        <label>
          Nhập giá trị sản phẩm sau cho chọn sản phẩm muốn thay đổi:{" "}
        </label>
        <input
          value={priceMobile}
          type="number"
          placeholder="Nhập giá trị sản phẩm: "
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPriceMobile(e.currentTarget.value);
          }}
        />
      </div>
      <table className="mobile-table">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Màn hình</th>
            <th>Ram</th>
            <th>Bộ nhớ trong</th>
            <th>Giá</th>
            <th>Xóa sản phẩm</th>
          </tr>
        </thead>
        <tbody>
          {mobiles?.map((mobile: MobileType) => {
            return (
              <tr key={mobile.id}>
                <td>{mobile.name}</td>
                <td>{mobile.screen}</td>
                <td>{mobile.ram}</td>
                <td>{mobile.rom}</td>
                <td>{mobile.price}</td>
                <td>
                  <div>
                    <button
                      onClick={() =>
                        handleUpdateMobile(fetchData, mobile.id, priceMobile)
                      }
                    >
                      update Price
                    </button>
                    <span
                      onClick={() => {
                        handleDeleteMobile(fetchData, mobile.id);
                      }}
                    >
                      X
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
