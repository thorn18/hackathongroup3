package com.characterApi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.characterApi.model.BattleCharacter;
import com.characterApi.service.BattleCharService;

@RestController
@RequestMapping("/api/character")
@CrossOrigin("*")
public class BattleCharacterController {

	
	@Autowired
	private BattleCharService battleCharService;
	
	@GetMapping("/")
	public List<BattleCharacter> findAll(){
		return battleCharService.findAll();
	}
	//get all villain
	//public List<BattleCharacter>
	
	@GetMapping("/{charId}")
	public BattleCharacter findBattleCharacterById(@PathVariable int charId) {
		return battleCharService.findBattleCharacterById(charId);
	}
	
	@PutMapping("/")
	public void updateBattleCharacter(BattleCharacter battleCharacter) {
		battleCharService.updateBattleCharacter(battleCharacter);
	}
	
	@DeleteMapping("/{charId}")
	public void deleteBattleCharacter(@PathVariable int charId) {
		battleCharService.deleteBattleCharacterById(charId);
	}
	
	
}
